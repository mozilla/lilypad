import React from 'react';
import styles from './icon.module.scss';

type InfoIconPropsT = {
  className?: string;
};

const ErrorIcon = ({ className }: InfoIconPropsT) => {
  return (
    <svg
      className={className}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15ZM15 7.5C15.6904 7.5 16.25 8.05964 16.25 8.75V17.5C16.25 18.1904 15.6904 18.75 15 18.75C14.3096 18.75 13.75 18.1904 13.75 17.5V8.75C13.75 8.05964 14.3096 7.5 15 7.5ZM15 23.75C15.8629 23.75 16.5625 23.0504 16.5625 22.1875C16.5625 21.3246 15.8629 20.625 15 20.625C14.1371 20.625 13.4375 21.3246 13.4375 22.1875C13.4375 23.0504 14.1371 23.75 15 23.75Z"
        className={styles.error}
      />
    </svg>
  );
};

export default ErrorIcon;
