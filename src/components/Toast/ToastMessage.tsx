import React, { useState, useRef, useCallback, useEffect } from 'react';
import styles from './ToastMessage.module.scss';
import Icon, { IconT } from '../Icon';
import Button, { ButtonCategoriesE, ButtonSizesE } from '../Button';
import FadeIn from '../util/FadeIn';
import { ToastTypesE, ToastLocationE } from './Toast';

export type ToastPropsT = {
  title: string;
  description: string;
  icon?: IconT;
  id: string;
  selfDestruct?: (id: string, location: ToastLocationE) => void;
  callback?: Function;
  callbackCta?: string;
  duration?: number;
  autoClose?: boolean;
  type?: ToastTypesE;
  location?: ToastLocationE;
  pauseOnHover?: boolean;
  classProp?: string;
};

const ToastMessage = ({
  title,
  description,
  icon = 'check',
  id,
  selfDestruct,
  callback,
  callbackCta = 'Confirm',
  duration = 2000,
  autoClose = true,
  type = ToastTypesE.SUCCESS,
  location = ToastLocationE.TOP_RIGHT,
  pauseOnHover = true,
  classProp = '',
}: ToastPropsT) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [intervalId, setIntervalId] = useState<number>();
  const toastRef = useRef<HTMLDivElement>(null);
  const progressBar = useRef<HTMLDivElement>(null);
  const timeVisible = useRef<number>(0);

  /**
   * Init Component
   */
  useEffect(() => {
    setIsVisible(true);
    setIsOpen(true);

    // If no auto close don't count down
    if (!autoClose) return;
    initInterval(timeVisible.current);
  }, []);

  /**
   * Init intercal for countdown
   * @param time number
   */
  const initInterval = (time: number) => {
    const interval = window.setInterval(() => {
      const increment = 10;

      if (time > duration) {
        clearInterval(interval);
        handleClose();
      }

      time += increment;
      // Store ref to start again at that point if need be
      timeVisible.current = time;

      animateProgress(time, duration);
    }, 10);

    setIntervalId(interval);
  };

  /**
   * Animate progress bar
   * @param time
   * @param duration
   */
  const animateProgress = (time: number, duration: number) => {
    progressBar.current?.style.setProperty(
      '--progress',
      String(1 - time / duration)
    );
  };

  /**
   * Mouse Enter
   */
  const handleMouseEnter = () => {
    if (!pauseOnHover || !autoClose) return;
    clearInterval(intervalId);
  };

  /**
   * Mouse Leave
   */
  const handleMouseLeave = () => {
    if (!pauseOnHover || !autoClose) return;
    initInterval(timeVisible.current);
  };

  /**
   * On Close
   */
  const handleClose = useCallback(() => {
    setIsOpen(false);
    clearInterval(intervalId);
  }, []);

  /**
   * Handle CTA action click
   */
  const handleAction = useCallback(() => {
    typeof callback === 'function' && callback();
  }, []);

  /**
   * On fade out complete
   */
  const handleOnComplete = useCallback(() => {
    if (!isOpen) {
      setIsVisible(false);
      // dispatch parent to delete me
      typeof selfDestruct === 'function' && selfDestruct(id, location);
    }
  }, [isOpen]);

  /**
   * Get button category
   */
  const ButtonCategory = (): ButtonCategoriesE => {
    let category = ButtonCategoriesE.SECONDARY_CLEAR;
    if (type === ToastTypesE.PLAIN) {
      category = ButtonCategoriesE.PRIMARY_CLEAR;
    }
    return category;
  };

  return (
    <FadeIn isVisible={isOpen} onComplete={handleOnComplete}>
      {isVisible && (
        <div
          className={`${classProp} ${styles.container} ${styles[type]}`}
          ref={toastRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Button
            onClick={handleClose}
            icon="x"
            classProp={styles.close}
            label="close"
            category={ButtonCategory()}
          />
          <div className={styles.header}>
            {icon && <Icon name={icon} size={20} />}
            <div className={styles.title}>{title}</div>
          </div>
          <p>{description}</p>
          {callback && (
            <div className={styles.callback_wrapper}>
              <Button
                onClick={handleAction}
                text={callbackCta}
                label={callbackCta}
                size={ButtonSizesE.SMALL}
                category={ButtonCategoriesE.PRIMARY_SOLID}
              />
            </div>
          )}
          <div ref={progressBar} className={styles.progress_bar}></div>
        </div>
      )}
    </FadeIn>
  );
};

ToastMessage.displayName = 'ToastMessage';
export default ToastMessage;
