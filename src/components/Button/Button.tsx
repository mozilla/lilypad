import React, { MouseEventHandler } from 'react';
import styles from './Button.module.scss';
import Icon, { IconT } from '../Icon/Icon';

export type ButtonT = 'button' | 'submit' | 'reset';

/**
 * type is formatted in snake_case so that we can use the mapped
 * value as a SCSS value.
 */
export type ButtonCategoriesT =
  | 'primary_solid'
  | 'primary_outline'
  | 'primary_clear'
  | 'secondary_solid'
  | 'secondary_outline'
  | 'secondary_clear';

export type ButtonSizesT = 'small' | 'medium' | 'large';

export type ButtonPropsT = {
  active?: boolean;
  id?: string;
  text?: string;
  label?: string;
  type?: ButtonT;
  category?: ButtonCategoriesT;
  size?: ButtonSizesT;
  disabled?: boolean;
  icon?: IconT;
  iconPlacedRight?: boolean;
  href?: string;
  target?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  classProp?: string;
};

type ButtonIconT = {
  icon: IconT | undefined;
  hasText: boolean;
  position: 'left' | 'right';
};

const ButtonIcon = ({ icon, hasText, position = 'left' }: ButtonIconT) => {
  if (!icon) {
    return <></>;
  }

  const styles = {
    left: 'mr-10',
    right: 'ml-10',
  };

  return (
    <Icon
      name={icon}
      color="currentColor"
      size={22}
      classProp={hasText ? styles[position] : ''}
    />
  );
};

const Button = ({
  active,
  id,
  text,
  label,
  type = 'button',
  category = 'primary_solid',
  size = 'medium',
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
      {!iconPlacedRight && (
        <ButtonIcon
          icon={icon}
          hasText={Boolean(text?.length)}
          position="left"
        />
      )}

      {/* Button Text  */}
      {text}

      {iconPlacedRight && (
        <ButtonIcon
          icon={icon}
          hasText={Boolean(text?.length)}
          position="right"
        />
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
      aria-label={label ? label : text}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
