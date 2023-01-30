import React from 'react';
import styles from './icon.module.scss';

type InfoIconPropsT = {
  classProp?: string;
};

const WarningIcon = ({ classProp }: InfoIconPropsT) => {
  return (
    <svg
      className={classProp}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <path
        className={styles.warning}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.1048 3.52586C12.836 0.491377 17.164 0.491381 18.8952 3.52586L29.3907 21.9224C31.1219 24.9569 28.9579 28.75 25.4955 28.75H4.50452C1.0421 28.75 -1.12191 24.9569 0.6093 21.9224L11.1048 3.52586ZM15 7.5C15.6904 7.5 16.25 8.05964 16.25 8.75V17.5C16.25 18.1904 15.6904 18.75 15 18.75C14.3096 18.75 13.75 18.1904 13.75 17.5V8.75C13.75 8.05964 14.3096 7.5 15 7.5ZM15 23.75C15.8629 23.75 16.5625 23.0504 16.5625 22.1875C16.5625 21.3246 15.8629 20.625 15 20.625C14.1371 20.625 13.4375 21.3246 13.4375 22.1875C13.4375 23.0504 14.1371 23.75 15 23.75Z"
      />
    </svg>
  );
};

export default WarningIcon;
