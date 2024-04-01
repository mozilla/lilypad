import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import Icon, { IconT } from '../Icon';
import styles from './Switch.module.scss';

export type SwitchPropsT = {
  label?: string;
  defaultState?: boolean;
  disabled?: boolean;
  onChange: Function;
  icon?: IconT;
  iconOn?: IconT; // Note: to use "iconOn", "icon" needs to have a value.
  hasIcon?: boolean;
  classProp?: string;
};

export type switchT = {
  setValue: (value: boolean) => void;
};

const Switch = forwardRef(
  (
    {
      label = 'switch',
      defaultState = false,
      disabled,
      icon = 'x',
      iconOn = 'check',
      hasIcon = true,
      onChange,
      classProp = '',
    }: SwitchPropsT,
    ref
  ) => {
    const [isOn, setIsOn] = useState(defaultState);
    const [currentIcon, setCurrentIcon] = useState<IconT | undefined>(
      defaultState === true && iconOn !== undefined ? iconOn : icon
    );

    /**
     * Exposed Component API
     */
    useImperativeHandle(ref, () => {
      return {
        setValue: (value: boolean) => setIsOn(value),
      };
    });

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
      setIsOn((state) => {
        onChange(!state);

        return !state;
      });
    };

    return (
      <div className={`${classProp} ${styles.wrapper}`}>
        <button
          aria-label={label}
          role="switch"
          type="button"
          onClick={handleSwitchClick}
          className={disabled ? styles.disabled : ''}
        >
          <div className={isOn ? styles.track_on : styles.track_off}>
            <div className={isOn ? styles.handle_on : styles.handle_off}>
              <div className={styles.handle_shadow}></div>
              {currentIcon && hasIcon && (
                <Icon
                  classProp={isOn ? styles.icon_on : styles.icon_off}
                  size={16}
                  name={currentIcon}
                />
              )}
            </div>
          </div>
        </button>

        {label && <label>{label}</label>}
      </div>
    );
  }
);

Switch.displayName = 'Switch';
export default Switch;
