import React from 'react';
import { NotificationTypesE } from './types';
import { InfoIcon, SuccessIcon, WarningIcon, ErrorIcon } from './icons';

type NotificationIconPropsT = {
  type: NotificationTypesE;
  classProp?: string;
};

const NotificationIcon = ({ type, classProp }: NotificationIconPropsT) => {
  switch (type) {
    case NotificationTypesE.INFO:
      return <InfoIcon classProp={classProp} />;
    case NotificationTypesE.SUCCESS:
      return <SuccessIcon classProp={classProp} />;
    case NotificationTypesE.WARNING:
      return <WarningIcon classProp={classProp} />;
    case NotificationTypesE.ERROR:
      return <ErrorIcon classProp={classProp} />;
    default:
      return <InfoIcon classProp={classProp} />;
  }
};

NotificationIcon.displayName = 'NotificationIcon';
export default NotificationIcon;
