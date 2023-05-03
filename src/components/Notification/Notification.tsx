import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { NotificationTypesE, NotificationLocationE } from './types';
import styles from './Notification.module.scss';
import NotificationMessage, { CategoryE } from './NotificationMessage';
import { IconT } from '../Icon/Icon';

export type NotificationPropsT = {
  classProp?: string;
};

export type NotificationInterfaceT = {
  dispatchNotification: Function;
};

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
  category: CategoryE;
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
        dispatchNotification: dispatchNotification,
      };
    });

    /**
     * Dispatch Notification
     * @param newNotifcation
     */
    const dispatchNotification = (newNotifcation: NewNotificationT) => {
      const notification = {
        ...newNotifcation,
        id: String(Date.now()),
      };

      setNotifications((notifications) => [notification, ...notifications]);
    };

    /**
     * Filter out notification
     * @param toasts
     * @param id
     * @returns NotificationI[]
     */
    const filterNotifications = (
      toasts: NotificationI[],
      id: string
    ): NotificationI[] => toasts.filter((toast) => toast.id != id);

    /**
     * Remove current message from state
     * @param id
     */
    const removeSelf = (id: string) => {
      setNotifications((state) => filterNotifications(state, id));
    };

    /**
     * Render correct notification type
     * @param notification
     * @returns JSX
     */
    const renderNotification = (notification: NotificationI) => (
      <NotificationMessage
        removeSelf={removeSelf}
        key={notification.id}
        {...notification}
      />
    );

    /**
     * Locations
     */
    const topCenterNotifications = notifications.filter(
      ({ location }) => location === NotificationLocationE.TOP_CENTER
    );

    const topRightNotifications = notifications.filter(
      ({ location }) => location === NotificationLocationE.TOP_RIGHT
    );

    const topLeftNotifications = notifications.filter(
      ({ location }) => location === NotificationLocationE.TOP_LEFT
    );

    const bottomCenterNotifications = notifications.filter(
      ({ location }) => location === NotificationLocationE.BOTTOM_CENTER
    );

    const bottomRightNotifications = notifications.filter(
      ({ location }) => location === NotificationLocationE.BOTTOM_RIGHT
    );

    const bottomLeftNotifications = notifications.filter(
      ({ location }) => location === NotificationLocationE.BOTTOM_LEFT
    );

    return (
      <div id="lily_notification" className={classProp}>
        {/* TOP CENTER  */}
        {Boolean(topCenterNotifications.length) && (
          <div className={styles.top_center}>
            {topCenterNotifications.map(renderNotification)}
          </div>
        )}

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

        {/* BOTTOM CENTER  */}
        {Boolean(bottomCenterNotifications.length) && (
          <div className={styles.bottom_center}>
            {bottomCenterNotifications.map(renderNotification)}
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
