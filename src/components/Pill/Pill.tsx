import React from 'react';
import styles from './Pill.module.scss';

export type PillPropsT = {
  title: string;
  category: 'primary' | 'secondary' | 'rainbow' | 'warm' | 'cool';
  classProp?: string;
};

const Pill = ({ title, category = 'primary', classProp = '' }: PillPropsT) => {
  return (
    <span
      className={`
       ${styles['pill_' + category]} 
       ${classProp}`}
    >
      {title}
    </span>
  );
};

export default Pill;
