import React, { useState, ReactNode } from 'react';
import styles from './ToolTip.module.scss';
import FadeIn from '../util/FadeIn';

type ToolTipPropsT = {
  children: ReactNode;
  description: string;
  classProp?: string;
};

const ToolTip = ({ children, description, classProp = '' }: ToolTipPropsT) => {
  const [show, setShow] = useState<boolean>(false);

  /**
   * Toggle Visibilty
   */
  const toggleToolTip = () => {
    setShow((state) => !state);
  };

  return (
    <section className={classProp}>
      <div onMouseEnter={toggleToolTip} onMouseLeave={toggleToolTip}>
        {children}
      </div>
      <FadeIn isVisible={show}>
        {show && <p className={styles.description}>{description}</p>}
      </FadeIn>
    </section>
  );
};

export default ToolTip;
