import React from 'react';
import Icon, { IconT } from '../../Icon';
import { NotificationTypesT } from '../types';
import styles from './icon.module.scss';

type InfoIconPropsT = {
  icon: IconT;
  type: NotificationTypesT;
  className?: string;
};

const CustomIcon = ({ icon, type }: InfoIconPropsT) => {
  return (
    <div className={`pl-12 flex ${styles['custom-' + type]}`}>
      <Icon name={icon} size={24} color="currentColor" />
    </div>
  );
};

export default CustomIcon;
