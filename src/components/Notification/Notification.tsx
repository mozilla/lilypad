import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { NewNotificationT, DEFAULT_NOTIFICATION } from './types';
import styles from './Notification.module.scss';
import NotificationMessage from './NotificationMessage';

export type NotificationPropsT = {
  classProp?: string;
};

export type NotificationInterfaceT = {
  dispatchNotification: Function;
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
     * Defult options
     * Note: other options that are optional are defaulted in child components
     */

    /**
     * Dispatch Notification
     * @param newNotifcation
     */
    const dispatchNotification = (newNotifcation: NewNotificationT) => {
      const notification = {
        ...DEFAULT_NOTIFICATION,
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
      ({ location }) => location === 'top_center'
    );

    const topRightNotifications = notifications.filter(
      ({ location }) => location === 'top_right'
    );

    const topLeftNotifications = notifications.filter(
      ({ location }) => location === 'top_left'
    );

    const bottomCenterNotifications = notifications.filter(
      ({ location }) => location === 'bottom_center'
    );

    const bottomRightNotifications = notifications.filter(
      ({ location }) => location === 'bottom_right'
    );

    const bottomLeftNotifications = notifications.filter(
      ({ location }) => location === 'bottom_left'
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
