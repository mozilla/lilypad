import React, {
  forwardRef,
  useRef,
  ChangeEventHandler,
  ChangeEvent,
  ReactNode,
} from 'react';
import styles from './Checkbox.module.scss';

type CheckboxPropsT = {
  label?: string | ReactNode;
  checked?: boolean;
  disabled?: boolean;
  classProp?: string;
  labelClassProp?: string;
  onChange: (value: boolean) => void;
};

const Checkbox = forwardRef(
  (
    {
      classProp = '',
      label,
      disabled,
      checked,
      labelClassProp = '',
      onChange,
    }: CheckboxPropsT,
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    /**
     * Handle Input Change
     * @param event
     */
    const handleOnChange: ChangeEventHandler<HTMLInputElement> = (
      event: ChangeEvent<HTMLInputElement>
    ) => {
      const checked = event.target.checked;
      onChange && onChange(checked);
    };

    return (
      <label className={`${classProp} ${styles.container}`}>
        <input
          onChange={handleOnChange}
          type="checkbox"
          disabled={disabled}
          checked={checked}
          ref={inputRef}
        />

        {/* Styled Checkmark  */}
        <div
          className={`${styles.checkmark} ${
            disabled && styles.checkmark_disabled
          }`}
        />

        {label ? (
          <div className={`${styles.label} ${labelClassProp}`}>{label}</div>
        ) : null}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;
