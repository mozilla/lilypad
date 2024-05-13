import React from 'react';
import styles from './Pill.module.scss';

export type PillPropsT = {
  title: string;
  category: 'primary' | 'secondary' | 'rainbow' | 'warm' | 'cool';
  className?: string;
};

const Pill = ({ title, category = 'primary', className = '' }: PillPropsT) => {
  return (
    <span
      className={`
       ${styles['pill_' + category]} 
       ${className}`}
    >
      {title}
    </span>
  );
};

export default Pill;
