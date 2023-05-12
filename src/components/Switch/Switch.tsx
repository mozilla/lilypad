import React, { useState, useEffect } from 'react';
import Icon, { IconT } from '../Icon';
import styles from './Switch.module.scss';

export type SwitchPropsT = {
  label?: string;
  defaultState?: boolean;
  disabled?: boolean;
  onChange: Function;
  icon: IconT;
  iconOn: IconT; // Note: to use "iconOn", "icon" needs to have a value.
  classProp?: string;
};

const Switch = ({
  label = 'switch',
  defaultState = false,
  disabled,
  icon,
  iconOn,
  onChange,
  classProp = '',
}: SwitchPropsT) => {
  const [isOn, setIsOn] = useState(defaultState);
  const [currentIcon, setCurrentIcon] = useState<IconT | undefined>(
    defaultState === true && iconOn !== undefined ? iconOn : icon
  );

  useEffect(() => {
    typeof onChange === 'function' && onChange(isOn);
  }, [isOn]);

  useEffect(() => {
    // If "on" find out if we put iconOn up or not
    if (isOn) {
      if (icon && iconOn) {
        setCurrentIcon(iconOn);
        return;
      }
      setCurrentIcon(icon);
      return;
    }

    // if "off" Icon is the default icon
    icon && setCurrentIcon(icon);
  }, [isOn, icon, iconOn]);

  const handleSwitchClick = () => {
    if (disabled) return;
    setIsOn((state) => !state);
  };

  return (
    <div className={`${classProp} ${styles.wrapper}`}>
      <button
        aria-label={label}
        role="switch"
        type="button"
        onClick={handleSwitchClick}
        className={disabled && styles.disabled}
      >
        <div className={isOn ? styles.track_on : styles.track_off}>
        <div className={isOn ? styles.handle_on : styles.handle_off}>
          <div className={styles.handle_shadow}></div>
          {currentIcon && (
            <Icon classProp={isOn ? styles.icon_on : styles.icon_off} size={16} name={currentIcon} />
          )}
        </div>
        </div>
      </button>

      {label && <label>{label}</label>}
    </div>
  );
};

export default Switch;
