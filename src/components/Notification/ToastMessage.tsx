import React, { useCallback, forwardRef, ForwardedRef, ReactNode } from 'react';
import styles from './ToastMessage.module.scss';
import Button, { ButtonCategoriesE, ButtonSizesE } from '../Button';
import { NotificationTypesE } from './types';
import NotificationIcon from './NotificationIcon';

export type ToastPropsT = {
  title: string;
  description: string;
  callback?: Function;
  callbackCta?: string;
  type?: NotificationTypesE;
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
      type = NotificationTypesE.SUCCESS,
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
          category={ButtonCategoriesE.PRIMARY_CLEAR}
        />
        <div className="flex">
          <div className={styles.icons}>
            <NotificationIcon type={type} classProp="mr-20" />
          </div>
          <div className="mr-20">
            <div className="heading-xs">X{title}</div>
            <p className="body-md">{description}</p>
            {callback && (
              <div className={styles.callback_wrapper}>
                <Button
                  onClick={handleAction}
                  text={callbackCta}
                  label={callbackCta}
                  size={ButtonSizesE.SMALL}
                  category={ButtonCategoriesE.PRIMARY_OUTLINE}
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
