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
  width?: string;
  classProp?: string;
};

const ToolTip = ({
  children,
  description,
  location = 'top',
  category = 'primary',
  width = '250px',
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
        <style>
          {`
          .localOverride {
            --tooltip-width: ${width}; !important;
          }
        `}
        </style>
        <FadeIn visible={isOpen}>
          <p
            className={`${classProp} ${styles.description} ${
              styles[category]
            } ${width && 'localOverride'}`}
          >
            {description}
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default ToolTip;
