import React, { useState, ReactNode, useCallback } from 'react';
import styles from './ToolTip.module.scss';
import FadeIn from '../util/FadeIn';

type ToolTipPropsT = {
  children: ReactNode;
  description: string;
  classProp?: string;
};

const ToolTip = ({ children, description, classProp = '' }: ToolTipPropsT) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleOpen = useCallback(() => {
    setIsVisible((state) => !state);
    setIsOpen((state) => !state);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen((state) => !state);
  }, []);

  const handleOnComplete = useCallback(() => {
    if (!isOpen) setIsVisible(false);
  }, [isOpen]);

  return (
    <section className={classProp}>
      <div onMouseEnter={handleOpen} onMouseLeave={handleClose}>
        {children}
      </div>
      <FadeIn isVisible={isOpen} onComplete={handleOnComplete}>
        {isVisible && <p className={styles.description}>{description}</p>}
      </FadeIn>
    </section>
  );
};

export default ToolTip;
