import React from 'react';
import styles from './RadioButton.module.scss'

type RadioButtonPropsT = {
  value: number | string,
  groupValue: number | string,
  checked?: boolean,
  isDisabled?: boolean,
  id: string,
  label: string,
  groupName: string,
  classProp?: string
}

const RadioButton = ({
  label,
  value,
  groupValue,
  isDisabled = false,
  id,
  groupName,
  classProp = '',
}: RadioButtonPropsT) => {

  return (
    <div className={`${styles.button_wrapper} ${classProp}`}>
      <input
        id={id}
        type="radio"
        name={groupName}
        value={value}
        disabled={isDisabled}
        checked={groupValue === value}
      />
      <label htmlFor={id}>{label}</label>

    </div>
  )
}

export default RadioButton
