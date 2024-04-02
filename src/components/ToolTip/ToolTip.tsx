import React, { useState, ReactNode, useCallback } from 'react';
import styles from './ToolTip.module.scss';
import FadeIn from '../FadeIn';

export type ToolTipCategoriesT = 'primary' | 'secondary' | 'tertiary';
export type ToolTipLocationT = 'top' | 'bottom' | 'right' | 'left';

type ToolTipPropsT = {
  children: ReactNode;
  description: string;
  location?: ToolTipLocationT;
  category?: ToolTipCategoriesT;
  classProp?: string;
};

const ToolTip = ({
  children,
  description,
  location = 'top',
  category = 'primary',
  classProp = '',
}: ToolTipPropsT) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <section className={styles.wrapper}>
      {/* Contents that trigger tool top */}
      <div
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        className={styles.target}
      >
        {children}
      </div>

      {/* Tool Tip  */}
      <div className={`${styles.container} ${styles[location]}`}>
        <FadeIn visible={isOpen}>
          <p
            className={`${classProp} ${styles.description} ${styles[category]}`}
          >
            {description}
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default ToolTip;
