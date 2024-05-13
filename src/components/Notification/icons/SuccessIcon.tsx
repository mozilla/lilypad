import React from 'react';
import styles from './icon.module.scss';

type InfoIconPropsT = {
  className?: string;
};

const SuccessIcon = ({ className }: InfoIconPropsT) => {
  return (
    <svg
      className={className}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <path
        className={styles.success}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30ZM22.772 10.8706C23.2528 10.3752 23.241 9.58384 22.7456 9.10303C22.2502 8.62221 21.4589 8.63402 20.9781 9.12941L12.2543 18.1175L9.09693 14.2139C8.66279 13.6772 7.87571 13.594 7.33896 14.0281C6.8022 14.4623 6.71901 15.2493 7.15315 15.7861L12.084 21.8825L22.772 10.8706Z"
        fill="#0C884C"
      />
    </svg>
  );
};

export default SuccessIcon;
