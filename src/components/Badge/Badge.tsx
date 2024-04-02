import React from 'react';
import styles from './Badge.module.scss';

export type BadgeCategoriesT = 'primary' | 'secondary';

export type BadgePropsT = {
  name: string;
  category: BadgeCategoriesT;
  classProp?: string;
};

const Badge = ({ name, category = 'primary', classProp = '' }: BadgePropsT) => {
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
