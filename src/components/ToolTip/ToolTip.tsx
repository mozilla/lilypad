import React, { useState, ReactNode, useCallback } from 'react';
import styles from './ToolTip.module.scss';
import FadeIn from '../FadeIn';

export enum ToolTipCategoriesE {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
}

export enum ToolTipLocationE {
  TOP = 'top',
  BOTTOM = 'bottom',
  RIGHT = 'right',
  LEFT = 'left',
}

type ToolTipPropsT = {
  children: ReactNode;
  description: string;
  location?: ToolTipLocationE;
  category?: ToolTipCategoriesE;
  classProp?: string;
};

const ToolTip = ({
  children,
  description,
  location = ToolTipLocationE.TOP,
  category = ToolTipCategoriesE.PRIMARY,
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
      <div onMouseEnter={handleOpen} onMouseLeave={handleClose}>
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
