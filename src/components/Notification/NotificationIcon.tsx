import React from 'react';
import { NotificationTypesT } from './types';
import { InfoIcon, SuccessIcon, WarningIcon, ErrorIcon } from './icons';

type NotificationIconPropsT = {
  type: NotificationTypesT;
  classProp?: string;
};

const NotificationIcon = ({ type, classProp }: NotificationIconPropsT) => {
  switch (type) {
    case 'info':
      return <InfoIcon classProp={classProp} />;
    case 'success':
      return <SuccessIcon classProp={classProp} />;
    case 'warning':
      return <WarningIcon classProp={classProp} />;
    case 'error':
      return <ErrorIcon classProp={classProp} />;
    default:
      return <InfoIcon classProp={classProp} />;
  }
};

NotificationIcon.displayName = 'NotificationIcon';
export default NotificationIcon;
