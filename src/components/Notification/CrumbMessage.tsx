import React, { ForwardedRef, useCallback, forwardRef } from 'react';
import styles from './CrumbMessage.module.scss';
import { NotificationTypesE } from './types';
import Icon, { IconT } from '../Icon';
import { CustomIcon } from './icons';
import NotificationIcon from './NotificationIcon';

export type CrumbPropsT = {
  description: string;
  type?: NotificationTypesE;
  hasIcon?: boolean;
  icon?: IconT;
  mouseEnter: () => void;
  mouseLeave: () => void;
  close: () => void;
  classProp?: string;
};

const CrumbMessage = forwardRef(
  (
    {
      description,
      type = NotificationTypesE.SUCCESS,
      hasIcon = false,
      icon,
      mouseEnter,
      mouseLeave,
      close,
      classProp = '',
    }: CrumbPropsT,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    /**
     * Mouse Enter
     */
    const handleMouseEnter = () => {
      typeof mouseEnter === 'function' ? mouseEnter() : '';
    };

    /**
     * Mouse Leave
     */
    const handleMouseLeave = () => {
      typeof mouseLeave === 'function' ? mouseLeave() : '';
    };

    /**
     * On Close
     */
    const handleClose = useCallback(() => {
      typeof close === 'function' ? close() : '';
    }, []);

    return (
      <div
        className={`${classProp} ${styles.container} ${styles[type]}`}
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {hasIcon &&
          (icon ? (
            <CustomIcon type={type} icon={icon} />
          ) : (
            <NotificationIcon type={type} classProp="pl-12" />
          ))}

        {/* CRUMB DISPLAYS MAX 30 CHARACTERS - USE TOAST IF YOU NEED MORE  */}
        <p className="body-md-semi-bold ">{description.slice(0, 30)}</p>

        <button
          className={styles.close}
          onClick={handleClose}
          aria-label="close"
        >
          <Icon name="x" size={24} color="currentColor" />
        </button>
      </div>
    );
  }
);

CrumbMessage.displayName = 'CrumbMessage';
export default CrumbMessage;
