import React from 'react';
import styles from './icon.module.scss';

type InfoIconPropsT = {
  classProp?: string;
};

const SuccessIcon = ({ classProp }: InfoIconPropsT) => {
  return (
    <svg
      className={classProp}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15ZM15 23.75C14.3096 23.75 13.75 23.1904 13.75 22.5V15C13.75 14.3096 14.3096 13.75 15 13.75C15.6904 13.75 16.25 14.3096 16.25 15V22.5C16.25 23.1904 15.6904 23.75 15 23.75ZM15 7.5C14.1371 7.5 13.4375 8.19955 13.4375 9.0625C13.4375 9.92544 14.1371 10.625 15 10.625C15.8629 10.625 16.5625 9.92544 16.5625 9.0625C16.5625 8.19956 15.8629 7.5 15 7.5Z"
        className={styles.info}
      />
    </svg>
  );
};

export default SuccessIcon;
