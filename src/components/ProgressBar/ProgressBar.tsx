import React from 'react';
import styles from './ProgressBar.module.scss';

export type ProgressBarPropsT = {
  value: number;
  classProp?: string;
};

const ProgressBar = ({ value = 40, classProp = '' }: ProgressBarPropsT) => {
  return (
    <div className={`${styles.wrapper} ${classProp}`}>
      <div className={styles.container}></div>
      <div className={styles.value} style={{ width: value + '%' }}></div>
    </div>
  );
};

export default ProgressBar;
