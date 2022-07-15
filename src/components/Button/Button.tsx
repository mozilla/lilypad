import React, { MouseEventHandler } from 'react';
import { ButtonT, ButtonCategoriesE, ButtonSizesE } from '../../types/Form';
import { IconT } from '../../types/General';
import styles from './Button.module.scss';
import Icon from '../Icon/Icon';

export type ButtonPropsT = {
  active?: boolean;
  id?: string;
  text?: string;
  type?: ButtonT;
  category?: ButtonCategoriesE;
  size?: ButtonSizesE;
  disabled?: boolean;
  icon?: IconT;
  iconPlacedRight?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  classProp?: string;
};

const Button = ({
  active,
  id,
  text,
  type = 'button',
  category = ButtonCategoriesE.PRIMARY_SOLID,
  size = ButtonSizesE.MEDIUM,
  disabled,
  icon,
  onClick,
  iconPlacedRight = false,
  classProp = '',
}: ButtonPropsT) => {
  return (
    <button
      className={`
        ${styles['button_' + category]} 
        ${styles[size]} 
        ${!text && styles[size + '_round']} 
        ${classProp} 
        ${active && styles['button_' + category + '_active']}
      `}
      id={id}
      aria-label={text}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {/* Left Icon  */}
      {icon && !iconPlacedRight ? (
        <Icon
          name={icon}
          color="currentColor"
          size={24}
          classProp={text ? 'margin-right-10' : ''}
        />
      ) : (
        ''
      )}
      {/* Button Text  */}
      {text}
      {/* Right Icon  */}
      {icon && iconPlacedRight ? (
        <Icon
          name={icon}
          color="currentColor"
          size={24}
          classProp={text ? 'margin-left-10' : ''}
        />
      ) : (
        ''
      )}
    </button>
  );
};

export default Button;
