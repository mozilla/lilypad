import React, { useState, useRef, useCallback, useEffect } from 'react';
import styles from './CrumbMessage.module.scss';
import FadeIn from '../util/FadeIn';
import { NotificationTypesE, NotificationLocationE } from './types';
import Icon, { IconT } from '../Icon';
import {
  InfoIcon,
  SuccessIcon,
  WarningIcon,
  ErrorIcon,
  CustomIcon,
} from './icons';

export type CrumbPropsT = {
  description: string;
  id: string;
  removeSelf?: (id: string) => void;
  duration?: number;
  autoClose?: boolean;
  type?: NotificationTypesE;
  location?: NotificationLocationE;
  pauseOnHover?: boolean;
  classProp?: string;
  hasIcon?: boolean;
  icon?: IconT;
};

type CrumbIconPropsT = {
  type: NotificationTypesE;
  classProp?: string;
};

const CrumbIcon = ({ type, classProp }: CrumbIconPropsT) => {
  switch (type) {
    case NotificationTypesE.INFO:
      return <InfoIcon classProp={classProp} />;
    case NotificationTypesE.SUCCESS:
      return <SuccessIcon classProp={classProp} />;
    case NotificationTypesE.WARNING:
      return <WarningIcon classProp={classProp} />;
    case NotificationTypesE.ERROR:
      return <ErrorIcon classProp={classProp} />;
    default:
      return <InfoIcon classProp={classProp} />;
  }
};

const CrumbMessage = ({
  description,
  id,
  removeSelf,
  duration = 2000,
  autoClose = true,
  type = NotificationTypesE.SUCCESS,
  location = NotificationLocationE.TOP_RIGHT,
  pauseOnHover = true,
  hasIcon = false,
  icon,
  classProp = '',
}: CrumbPropsT) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [intervalId, setIntervalId] = useState<number>();
  const crumbRef = useRef<HTMLDivElement>(null);
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
    return;
  }, []);

  /**
   * Init Swipe Events
   */
  const initSwipe = () => {
    // Touch Events
    crumbRef.current?.addEventListener('touchstart', handleTouchStart);
    crumbRef.current?.addEventListener('touchmove', handleTouchMove);
    crumbRef.current?.addEventListener('touchend', handleTouchEnd);
  };

  /**
   * Remove Touch Events
   */
  const removeEvents = () => {
    crumbRef.current?.removeEventListener('touchstart', handleTouchStart);
    crumbRef.current?.removeEventListener('touchmove', handleTouchMove);
    crumbRef.current?.removeEventListener('touchend', handleTouchEnd);
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

    // If touch distance goes over threshold then close crumb
    if (difference > threshold) {
      handleClose();
    }
  };

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
    }, 10);

    setIntervalId(interval);
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
    let animation = 'translateX(60px)';
    if (
      location === NotificationLocationE.BOTTOM_LEFT ||
      location === NotificationLocationE.TOP_LEFT
    ) {
      // Fade to the left
      animation = 'translateX(-60px)';
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
          ref={crumbRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {hasIcon &&
            (icon ? (
              <CustomIcon type={type} icon={icon} />
            ) : (
              <CrumbIcon type={type} classProp="pl-12" />
            ))}

          {/* CRUMB DISPLAYS MAX 30 CHARACTERS - USE TOAST IF YOU NEED MORE  */}
          <p className="body-md-semi-bold ">{description.slice(0, 30)}</p>

          <button
            className={styles.close}
            onClick={handleClose}
            aria-label="close"
          >
            <Icon name="x" size={24} color="currentColor" />
          </button>
        </div>
      )}
    </FadeIn>
  );
};

CrumbMessage.displayName = 'CrumbMessage';
export default CrumbMessage;
