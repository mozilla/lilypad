import React, { useState } from 'react';
import styles from './Avatar.module.scss';

export type AvatarPropsT = {
  src: string;
  alt: string;
  size: number;
  classProp?: string;
};

const Avatar = ({ src, alt, size = 50, classProp = '' }: AvatarPropsT) => {
  const [imageDidError, setImageDidError] = useState(false);
  return (
    <div
      className={`${styles.avatar} ${classProp}`}
      style={{ height: `${size}px`, width: `${size}px` }}
    >
      {imageDidError ? (
        <span className="body-md" style={{ fontSize: `${size / 2}px` }}>
          {alt}
        </span>
      ) : (
        <img
          src={src}
          alt={alt}
          onError={() => {
            setImageDidError(true);
          }}
        />
      )}
    </div>
  );
};

export default Avatar;
