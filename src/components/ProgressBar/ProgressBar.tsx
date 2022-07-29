import React from 'react';
import styles from './ProgressBar.module.scss';

export type ProgressBarPropsT = {
  value: number;
  classProp?: string;
  classValueProp?: string;
};

const ProgressBar = ({ value = 40, classProp = '', classValueProp = ''}: ProgressBarPropsT) => {
  return (
    <div className={`${styles.wrapper} ${classProp}`}>
      <div className={styles.container}></div>
      <div className={`${styles.value} ${classValueProp}`} style={{ width: value + '%' }}></div>
    </div>
  );
};

export default ProgressBar;
