import React, { useCallback, forwardRef, ForwardedRef, ReactNode } from 'react';
import styles from './ToastMessage.module.scss';
import Button from '../Button';
import { NotificationTypesT } from './types';
import NotificationIcon from './NotificationIcon';

export type ToastPropsT = {
  title: string;
  description: string;
  callback?: Function;
  callbackCta?: string;
  type?: NotificationTypesT;
  mouseEnter: () => void;
  mouseLeave: () => void;
  close: () => void;
  progressBar?: ReactNode;
  classProp?: string;
};

const ToastMessage = forwardRef(
  (
    {
      title,
      description,
      callback,
      callbackCta = 'Confirm',
      type = 'success',
      mouseEnter,
      mouseLeave,
      close,
      progressBar,
      classProp = '',
    }: ToastPropsT,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    /**
     * Handle CTA action click
     */
    const handleAction = useCallback(() => {
      typeof callback === 'function' && callback();
    }, []);

    return (
      <div
        className={`${classProp} ${styles.container} ${styles[type]}`}
        ref={ref}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        <Button
          onClick={close}
          icon="x"
          classProp={styles.close}
          label="close"
          category="primary_clear"
        />
        <div className="flex">
          <div className={styles.icons}>
            <NotificationIcon type={type} classProp="mr-20" />
          </div>
          <div className="mr-20">
            <div className="heading-xs">{title}</div>
            <p className="body-md my-16-dt my-14-mb">{description}</p>
            {callback && (
              <div className={styles.callback_wrapper}>
                <Button
                  onClick={handleAction}
                  text={callbackCta}
                  label={callbackCta}
                  size="small"
                  category="primary_outline"
                  icon="arrow-right"
                  iconPlacedRight={true}
                />
              </div>
            )}
          </div>
        </div>

        {progressBar}
      </div>
    );
  }
);

ToastMessage.displayName = 'ToastMessage';
export default ToastMessage;
