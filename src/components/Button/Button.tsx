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
  icon?: IconT | React.ReactNode;
  iconPlacedRight?: boolean;
  href?: string;
  target?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  classProp?: string;
  LinkComponent?: React.ComponentType<{
    href: string;
    children: React.ReactNode;
    className?: string;
    id?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    target?: string;
  }>;
};

type ButtonIconT = {
  icon: IconT | React.ReactNode;
  hasText: boolean;
  position: 'left' | 'right';
};

const ButtonIcon = ({ icon, hasText, position = 'left' }: ButtonIconT) => {
  if (typeof icon !== 'string') return <>{icon}</>;

  return (
    <Icon
      name={icon as IconT}
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
  LinkComponent,
}: ButtonPropsT) => {
  const content = (
    <>
      {!iconPlacedRight && icon && (
        <ButtonIcon
          icon={icon}
          hasText={Boolean(text?.length)}
          position="left"
        />
      )}

      {/* Button Text  */}
      {text}

      {iconPlacedRight && icon && (
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

  if (href && LinkComponent) {
    // To support NextJs Link
    return (
      <LinkComponent
        className={className}
        href={href}
        onClick={onClick}
        target={target}
      >
        {content}
      </LinkComponent>
    );
  }

  if (href) {
    // Fall back to a standard <a> tag if LinkComponent is not provided
    return (
      <a
        className={className}
        id={id}
        target={target}
        href={href}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }
  // Button logic remains unchanged
  return (
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
