import React from 'react';
import styles from './ProgressBar.module.scss';

export type ProgressBarPropsT = {
 value : number
};

const ProgressBar = ({
  value = 40
}: ProgressBarPropsT) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}></div>
      <div className={styles.value} style={{width: value + '%'}}></div>
    </div>
  );
};

export default ProgressBar;
