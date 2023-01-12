import React, { useState, useRef, useCallback, useEffect } from 'react';
import styles from './ToastMessage.module.scss';
import Button, { ButtonCategoriesE, ButtonSizesE } from '../Button';
import FadeIn from '../util/FadeIn';
import { ToastTypesE, ToastLocationE } from './Toast';
import { InfoIcon, SuccessIcon, WarningIcon, ErrorIcon } from './icons';

export type ToastPropsT = {
  title: string;
  description: string;
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

type ToastIconPropsT = {
  type: ToastTypesE;
  classProp?: string;
};

const ToastIcon = ({ type, classProp }: ToastIconPropsT) => {
  switch (type) {
    case ToastTypesE.INFO:
      return <InfoIcon classProp={classProp} />;
    case ToastTypesE.SUCCESS:
      return <SuccessIcon classProp={classProp} />;
    case ToastTypesE.WARNING:
      return <WarningIcon classProp={classProp} />;
    case ToastTypesE.ERROR:
      return <ErrorIcon classProp={classProp} />;
    default:
      return <InfoIcon classProp={classProp} />;
  }
};

const ToastMessage = ({
  title,
  description,
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
  const touchStart = useRef<number>(0);
  const touchEnd = useRef<number>(0);

  /**
   * Init Component
   */
  useEffect(() => {
    setIsVisible(true);
    setIsOpen(true);
    initSwipe();

    // If no auto close don't count down
    if (!autoClose) return;
    initInterval(timeVisible.current);
  }, []);

  /**
   * Init Swipe Events
   */
  const initSwipe = () => {
    // Touch Events
    toastRef.current?.addEventListener('touchstart', handleTouchStart);
    toastRef.current?.addEventListener('touchmove', handleTouchMove);
    toastRef.current?.addEventListener('touchend', handleTouchEnd);
  };

  /**
   * Remove Touch Events
   */
  const removeEvents = () => {
    toastRef.current?.removeEventListener('touchstart', handleTouchStart);
    toastRef.current?.removeEventListener('touchmove', handleTouchMove);
    toastRef.current?.removeEventListener('touchend', handleTouchEnd);
  };

  /**
   * Touch Start
   * @param e  TouchEvent
   */
  const handleTouchStart = (e: TouchEvent) => {
    touchStart.current = e.targetTouches[0].clientX;
  };

  /**
   * Touch Move
   * @param e  TouchEvent
   */
  const handleTouchMove = (e: TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  /**
   * Touch End
   */
  const handleTouchEnd = () => {
    const threshold = 45;
    const difference =
      touchStart.current > touchEnd.current
        ? touchStart.current - touchEnd.current
        : touchEnd.current - touchStart.current;

    // If touch distance goes over threshold then close toast
    if (difference > threshold) {
      handleClose();
    }
  };

  /**
   * Init interval for countdown
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
    removeEvents();
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

  const fadeAnimation = () => {
    // Fade to the right
    let animation = 'translateX(100px)';
    if (
      location === ToastLocationE.BOTTOM_LEFT ||
      location === ToastLocationE.TOP_LEFT
    ) {
      // Fade to the left
      animation = 'translateX(-100px)';
    }
    return animation;
  };

  return (
    <FadeIn
      isVisible={isOpen}
      onComplete={handleOnComplete}
      animation={fadeAnimation()}
    >
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
            category={ButtonCategoriesE.PRIMARY_CLEAR}
          />
          <div className="flex">
            <div className={styles.icons}>
              <ToastIcon type={type} classProp="mr-20" />
            </div>
            <div className="mr-20">
              <div className="heading-xs">{title}</div>
              <p className="body-md">{description}</p>
              {callback && (
                <div className={styles.callback_wrapper}>
                  <Button
                    onClick={handleAction}
                    text={callbackCta}
                    label={callbackCta}
                    size={ButtonSizesE.SMALL}
                    category={ButtonCategoriesE.PRIMARY_OUTLINE}
                    icon="arrow-right"
                    iconPlacedRight={true}
                  />
                </div>
              )}
            </div>
          </div>

          <div
            ref={progressBar}
            className={`${styles.progress_bar} ${autoClose && styles.active}`}
          ></div>
        </div>
      )}
    </FadeIn>
  );
};

ToastMessage.displayName = 'ToastMessage';
export default ToastMessage;
