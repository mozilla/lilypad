import React from 'react';
import { NotificationTypesT } from './types';
import { InfoIcon, SuccessIcon, WarningIcon, ErrorIcon } from './icons';

type NotificationIconPropsT = {
  type: NotificationTypesT;
  className?: string;
};

const NotificationIcon = ({ type, className }: NotificationIconPropsT) => {
  switch (type) {
    case 'info':
      return <InfoIcon className={className} />;
    case 'success':
      return <SuccessIcon className={className} />;
    case 'warning':
      return <WarningIcon className={className} />;
    case 'error':
      return <ErrorIcon className={className} />;
    default:
      return <InfoIcon className={className} />;
  }
};

NotificationIcon.displayName = 'NotificationIcon';
export default NotificationIcon;
