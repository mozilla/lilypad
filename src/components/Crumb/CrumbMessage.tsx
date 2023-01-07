import React, { useState, useRef, useCallback, useEffect } from 'react';
import styles from './CrumbMessage.module.scss';
import Button, { ButtonCategoriesE } from '../Button';
import FadeIn from '../util/FadeIn';
import { CrumbTypesE, CrumbLocationE } from './Crumb';

export type CrumbPropsT = {
  description: string;
  id: string;
  selfDestruct?: (id: string, location: CrumbLocationE) => void;
  duration?: number;
  autoClose?: boolean;
  type?: CrumbTypesE;
  location?: CrumbLocationE;
  pauseOnHover?: boolean;
  classProp?: string;
};

const CrumbMessage = ({
  description,
  id,
  selfDestruct,
  duration = 2000,
  autoClose = true,
  type = CrumbTypesE.SUCCESS,
  location = CrumbLocationE.TOP_RIGHT,
  pauseOnHover = true,
  classProp = '',
}: CrumbPropsT) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [intervalId, setIntervalId] = useState<number>();
  const crumbRef = useRef<HTMLDivElement>(null);
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
      typeof selfDestruct === 'function' && selfDestruct(id, location);
    }
  }, [isOpen]);

  return (
    <FadeIn isVisible={isOpen} onComplete={handleOnComplete}>
      {isVisible && (
        <div
          className={`${classProp} ${styles.container} ${styles[type]}`}
          ref={crumbRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <p className="body-md-semi-bold ">{description.slice(0, 30)}</p>
          <Button
            onClick={handleClose}
            icon="x"
            classProp={styles.close}
            label="close"
            category={ButtonCategoriesE.SECONDARY_CLEAR}
          />
        </div>
      )}
    </FadeIn>
  );
};

CrumbMessage.displayName = 'CrumbMessage';
export default CrumbMessage;
