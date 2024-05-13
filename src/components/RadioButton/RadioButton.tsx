import React, { ReactNode } from 'react';
import styles from './RadioButton.module.scss';

type RadioButtonPropsT = {
  value: number | string;
  groupValue: number | string;
  checked?: boolean;
  isDisabled?: boolean;
  id: string;
  label?: string;
  icon?: ReactNode;
  groupName: string;
  className?: string;
};

const RadioButton = ({
  label,
  value,
  groupValue,
  isDisabled = false,
  id,
  icon,
  groupName,
  className = '',
}: RadioButtonPropsT) => {
  return (
    <div className={`${styles.button_wrapper} ${className}`}>
      <input
        readOnly={true}
        id={id}
        type="radio"
        name={groupName}
        value={value}
        disabled={isDisabled}
        checked={groupValue === value}
      />

      {icon}

      {/* Users might want a custom wrapping label  */}
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
};

export default RadioButton;
