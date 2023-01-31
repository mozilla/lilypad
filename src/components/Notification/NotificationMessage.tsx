import React, { useState, useRef, useCallback, useEffect } from 'react';
import styles from './ToastMessage.module.scss';
import FadeIn from '../util/FadeIn';
import { NotificationTypesE, NotificationLocationE } from './types';
import { IconT } from '../Icon';
import ToastMessage from './ToastMessage';
import CrumbMessage from './CrumbMessage';

export enum CategoryE {
  TOAST = 'toast',
  CRUMB = 'crumb',
}

export type NotificationMessagePropsT = {
  title: string;
  description: string;
  id: string;
  removeSelf?: (id: string) => void;
  callback?: Function;
  callbackCta?: string;
  duration?: number;
  autoClose?: boolean;
  type?: NotificationTypesE;
  location?: NotificationLocationE;
  pauseOnHover?: boolean;
  hasIcon?: boolean;
  category: CategoryE;
  icon?: IconT;
  classProp?: string;
};

const NotificationMessage = ({
  title,
  description,
  id,
  removeSelf,
  callback,
  callbackCta = 'Confirm',
  duration = 2000,
  autoClose = true,
  type = NotificationTypesE.SUCCESS,
  location = NotificationLocationE.TOP_RIGHT,
  pauseOnHover = true,
  hasIcon = false,
  category,
  icon,
}: NotificationMessagePropsT) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [intervalId, setIntervalId] = useState<number>();
  const notificationRef = useRef<HTMLDivElement>(null);
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
    notificationRef.current?.addEventListener('touchstart', handleTouchStart);
    notificationRef.current?.addEventListener('touchmove', handleTouchMove);
    notificationRef.current?.addEventListener('touchend', handleTouchEnd);
  };

  /**
   * Remove Touch Events
   */
  const removeEvents = () => {
    notificationRef.current?.removeEventListener(
      'touchstart',
      handleTouchStart
    );
    notificationRef.current?.removeEventListener('touchmove', handleTouchMove);
    notificationRef.current?.removeEventListener('touchend', handleTouchEnd);
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
      typeof removeSelf === 'function' && removeSelf(id);
    }
  }, [isOpen]);

  const fadeAnimation = () => {
    // Fade to the right
    let animation = 'translateX(100px)';
    if (
      location === NotificationLocationE.BOTTOM_LEFT ||
      location === NotificationLocationE.TOP_LEFT
    ) {
      // Fade to the left
      animation = 'translateX(-100px)';
    }
    return animation;
  };

  const ProgressBar = (
    <div
      ref={progressBar}
      className={`${styles.progress_bar} ${autoClose && styles.active}`}
    ></div>
  );

  const renderMessage = (param: CategoryE) => {
    switch (param) {
      case CategoryE.CRUMB:
        return (
          <CrumbMessage
            description={description}
            ref={notificationRef}
            icon={icon}
            hasIcon={hasIcon}
            mouseEnter={handleMouseEnter}
            mouseLeave={handleMouseLeave}
            close={handleClose}
          />
        );
      case CategoryE.TOAST:
        return (
          <ToastMessage
            title={title}
            description={description}
            ref={notificationRef}
            callback={callback}
            callbackCta={callbackCta}
            type={type}
            mouseEnter={handleMouseEnter}
            mouseLeave={handleMouseLeave}
            close={handleClose}
            progressBar={ProgressBar}
          />
        );
    }
  };

  return (
    <FadeIn
      isVisible={isOpen}
      onComplete={handleOnComplete}
      animation={fadeAnimation()}
    >
      {isVisible && renderMessage(category)}
    </FadeIn>
  );
};

NotificationMessage.displayName = 'NotificationMessage';
export default NotificationMessage;
