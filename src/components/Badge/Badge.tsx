import React from 'react';
import styles from './Badge.module.scss';

export enum BadgeCategoriesE {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export type BadgePropsT = {
  name: string;
  category: BadgeCategoriesE;
  classProp?: string;
};

const Badge = ({
  name,
  category = BadgeCategoriesE.PRIMARY,
  classProp = '',
}: BadgePropsT) => {
  return (
    <span
      className={`
       ${styles['badge_' + category]} 
       ${classProp}`}
    >
      {name}
    </span>
  );
};

export default Badge;
