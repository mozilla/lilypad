import React, { useState } from 'react';
import styles from './Avatar.module.scss';

export type AvatarPropsT = {
  src: string;
  alt: string;
  size: number;
  className?: string;
};

const Avatar = ({ src, alt, size = 50, className = '' }: AvatarPropsT) => {
  const [imageDidError, setImageDidError] = useState(false);
  return (
    <div
      className={`${styles.avatar} ${className}`}
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
