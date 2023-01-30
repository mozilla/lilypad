import React, { MouseEventHandler } from 'react';
import styles from './Button.module.scss';
import Icon, { IconT } from '../Icon/Icon';

export type ButtonT = 'button' | 'submit' | 'reset';

/**
 * Enums are formatted in snake_case so that we can use the mapped
 * value as a SCSS value.
 */
export enum ButtonCategoriesE {
  PRIMARY_SOLID = 'primary_solid',
  PRIMARY_OUTLINE = 'primary_outline',
  PRIMARY_CLEAR = 'primary_clear',
  SECONDARY_SOLID = 'secondary_solid',
  SECONDARY_OUTLINE = 'secondary_outline',
  SECONDARY_CLEAR = 'secondary_clear',
}

export enum ButtonSizesE {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export type ButtonPropsT = {
  active?: boolean;
  id?: string;
  text?: string;
  label: string;
  type?: ButtonT;
  category?: ButtonCategoriesE;
  size?: ButtonSizesE;
  disabled?: boolean;
  icon?: IconT;
  iconPlacedRight?: boolean;
  href?: string;
  target?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  classProp?: string;
};

const Button = ({
  active,
  id,
  text,
  label,
  type = 'button',
  category = ButtonCategoriesE.PRIMARY_SOLID,
  size = ButtonSizesE.MEDIUM,
  disabled,
  icon,
  onClick,
  iconPlacedRight = false,
  href,
  target = '_self',
  classProp = '',
}: ButtonPropsT) => {
  const content = (
    <>
      {/* Left Icon  */}
      {icon && !iconPlacedRight ? (
        <Icon
          name={icon}
          color="currentColor"
          size={22}
          classProp={text ? 'mr-10' : ''}
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
          size={22}
          classProp={text ? 'ml-10' : ''}
        />
      ) : (
        ''
      )}
    </>
  );

  /**
   * Configure CSS Class
   */
  const className = `
    ${styles['button_' + category]} 
    ${styles[size]} 
    ${!text && styles[size + '_round']} 
    ${classProp} 
    ${active && styles['button_' + category + '_active']}
  `;

  return href ? (
    // ANCHOR LINK
    <a
      className={className}
      id={id}
      target={target}
      href={href}
      onClick={onClick}
    >
      {content}
    </a>
  ) : (
    // BUTTON
    <button
      className={className}
      id={id}
      aria-label={label}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
