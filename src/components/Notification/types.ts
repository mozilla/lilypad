import { IconT } from '../Icon/Icon';

export type NotificationTypesT =
  | 'neutral'
  | 'success'
  | 'error'
  | 'info'
  | 'warning';

export type NotificationLocationT =
  | 'top_center'
  | 'top_right'
  | 'top_left'
  | 'bottom_center'
  | 'bottom_right'
  | 'bottom_left';

export type CategoryT = 'toast' | 'crumb';

export type NewNotificationT = {
  title: string;
  description: string;
  duration?: number;
  autoClose?: boolean;
  hasIcon?: boolean;
  icon?: IconT;
  type?: NotificationTypesT;
  callback?: Function;
  callbackCta?: string;
  location?: NotificationLocationT;
  pauseOnHover?: boolean;
  category?: CategoryT;
};

export const DEFAULT_NOTIFICATION: Partial<NewNotificationT> = {
  type: 'success',
  location: 'bottom_right',
  category: 'toast',
  description: '',
};
