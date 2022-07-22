import React from 'react';
import styles from './Avatar.module.scss';

export type AvatarPropsT = {
  src: string;
  alt: string;
  size: number;
  classProp?: string;
};

const Avatar = ({ src, alt, size = 50, classProp = '' }: AvatarPropsT) => {
  return (
    <div
      className={`${styles.avatar} ${classProp}`}
      style={{ height:`${size}px`, width:`${size}px`}}
    >
      <img src={src} alt={alt} />
    </div>
  );
};

export default Avatar;
