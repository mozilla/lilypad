import React, { useState, forwardRef, useImperativeHandle } from 'react';
import styles from './Notification.module.scss';
import ToastMessage from './ToastMessage';
import CrumbMessage from './CrumbMessage';
import { IconT } from '../Icon/Icon';

export type NotificationPropsT = {
  classProp?: string;
};

export type NotificationInterfaceT = {
  dispatchToast: Function;
};

export enum NotificationTypesE {
  NEUTRAL = 'neutral',
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning',
}

export enum NotificationLocationE {
  TOP_RIGHT = 'top_right',
  TOP_LEFT = 'top_left',
  BOTTOM_RIGHT = 'bottom_right',
  BOTTOM_LEFT = 'bottom_left',
}

export type NewNotificationT = {
  title: string;
  description: string;
  duration?: number;
  autoClose?: boolean;
  hasIcon?: boolean;
  icon?: IconT;
  type?: NotificationTypesE;
  callback?: Function;
  callbackCta?: string;
  location?: NotificationLocationE;
  pauseOnHover?: boolean;
  category: 'crumb' | 'toast';
};

export interface NotificationI extends NewNotificationT {
  id: string;
}

const Notification = forwardRef(
  ({ classProp = '' }: NotificationPropsT, ref) => {
    const [notifications, setNotifications] = useState<NotificationI[]>([]);

    /**
     * Exposed Component API
     */
    useImperativeHandle(ref, (): NotificationInterfaceT => {
      return {
        dispatchToast: dispatchNotification,
      };
    });

    const dispatchNotification = (newNotifcation: NewNotificationT) => {
      const notification = {
        ...newNotifcation,
        id: String(Date.now()),
      };

      setNotifications((notifications) => [notification, ...notifications]);
    };

    const filterNotifications = (toasts: NotificationI[], id: string) =>
      toasts.filter((toast) => toast.id != id);

    const removeSelf = (id: string) => {
      setNotifications((state) => filterNotifications(state, id));
    };

    const renderNotification = (notification: NotificationI) => {
      // CRUMB ELEMENT
      if (notification.category === 'crumb') {
        return (
          <CrumbMessage
            removeSelf={removeSelf}
            key={notification.id}
            {...notification}
          />
        );
      }

      // TOAST ELEMENT
      if (notification.category === 'toast') {
        return (
          <ToastMessage
            removeSelf={removeSelf}
            key={notification.id}
            {...notification}
          />
        );
      }
    };

    /**
     * Locations
     */
    const topRightNotifications = notifications.filter(
      ({ location }) => location === NotificationLocationE.TOP_RIGHT
    );

    const topLeftNotifications = notifications.filter(
      ({ location }) => location === NotificationLocationE.TOP_LEFT
    );
    const bottomRightNotifications = notifications.filter(
      ({ location }) => location === NotificationLocationE.BOTTOM_RIGHT
    );

    const bottomLeftNotifications = notifications.filter(
      ({ location }) => location === NotificationLocationE.BOTTOM_LEFT
    );

    return (
      <div id="lily_toast" className={classProp}>
        {/* TOP RIGHT  */}
        {Boolean(topRightNotifications.length) && (
          <div className={styles.top_right}>
            {topRightNotifications.map(renderNotification)}
          </div>
        )}

        {/* TOP LEFT  */}
        {Boolean(topLeftNotifications.length) && (
          <div className={styles.top_left}>
            {topLeftNotifications.map(renderNotification)}
          </div>
        )}

        {/* BOTTOM RIGHT  */}
        {Boolean(bottomRightNotifications.length) && (
          <div className={styles.bottom_right}>
            {bottomRightNotifications.map(renderNotification)}
          </div>
        )}

        {/* BOTTOM LEFT  */}
        {Boolean(bottomLeftNotifications.length) && (
          <div className={styles.bottom_left}>
            {bottomLeftNotifications.map(renderNotification)}
          </div>
        )}
      </div>
    );
  }
);

Notification.displayName = 'Notification';
export default Notification;
