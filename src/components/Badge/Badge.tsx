import React from 'react';
import styles from './Badge.module.scss';

export type BadgeCategoriesT = 'primary' | 'secondary';

export type BadgePropsT = {
  name: string;
  category: BadgeCategoriesT;
  className?: string;
};

const Badge = ({ name, category = 'primary', className = '' }: BadgePropsT) => {
  return (
    <span
      className={`
       ${styles['badge_' + category]} 
       ${className}`}
    >
      {name}
    </span>
  );
};

export default Badge;
