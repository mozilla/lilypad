import React, { useState, ReactNode } from 'react';
import styles from './ToolTip.module.scss';
import FadeInWrapper from '../util/FadeIn';

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
    <section className={`${classProp} ${styles.wrapper}`}>
      {/* Contents that trigger tool top */}
      <div onMouseEnter={handleOpen} onMouseLeave={handleClose}>
        {children}
      </div>

      {/* Tool Tip  */}
      <span className={`${styles.container} ${styles[location]}`}>
        <FadeInWrapper visible={isOpen}>
          <p className={`${styles.description} ${styles[category]}`}>
            {description}
          </p>
        </FadeInWrapper>
      </span>
    </section>
  );
};

export default ToolTip;
