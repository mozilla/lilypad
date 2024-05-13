import React, { ForwardedRef, useCallback, forwardRef } from 'react';
import styles from './CrumbMessage.module.scss';
import { NotificationTypesT } from './types';
import Icon, { IconT } from '../Icon';
import { CustomIcon } from './icons';
import NotificationIcon from './NotificationIcon';

export type CrumbPropsT = {
  description: string;
  type?: NotificationTypesT;
  hasIcon?: boolean;
  icon?: IconT;
  mouseEnter: () => void;
  mouseLeave: () => void;
  close: () => void;
  className?: string;
};

const CrumbMessage = forwardRef(
  (
    {
      description,
      type = 'success',
      hasIcon = false,
      icon,
      mouseEnter,
      mouseLeave,
      close,
      className = '',
    }: CrumbPropsT,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        className={`${className} ${styles.container} ${styles[type]}`}
        ref={ref}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        {hasIcon &&
          (icon ? (
            <CustomIcon type={type} icon={icon} />
          ) : (
            <NotificationIcon type={type} className="pl-12px" />
          ))}

        {/* CRUMB DISPLAYS MAX 30 CHARACTERS - USE TOAST IF YOU NEED MORE  */}
        <p className="body-md-semi-bold ">{description.slice(0, 30)}</p>

        <button className={styles.close} onClick={close} aria-label="close">
          <Icon name="x" size={24} color="currentColor" />
        </button>
      </div>
    );
  }
);

CrumbMessage.displayName = 'CrumbMessage';
export default CrumbMessage;
