import React from 'react';
import styles from './Avatar.module.scss';
 
export type AvatarPropsT = {
  src: string;
  alt: string;
  classProp?: string;
};

const Avatar = ({
  src,
  alt,
  classProp = '',
}: AvatarPropsT) => {
  return (
    <div className={`${styles.avatar} ${classProp}`}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Avatar;
