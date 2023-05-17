import React from 'react';
import styles from './Pill.module.scss';

export type PillPropsT = {
  name: string;
  category: 'primary' | 'secondary' | 'rainbow' | 'warm' | 'cool';
  classProp?: string;
};

const Pill = ({ name, category = 'primary', classProp = '' }: PillPropsT) => {
  return (
    <span
      className={`
       ${styles['pill_' + category]} 
       ${classProp}`}
    >
      {name}
    </span>
  );
};

export default Pill;
