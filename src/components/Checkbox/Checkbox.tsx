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
  className?: string;
  labelclassName?: string;
  onChange: (value: boolean) => void;
};

const Checkbox = forwardRef(
  (
    {
      className = '',
      label,
      disabled,
      checked,
      labelclassName = '',
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
      <label className={`${className} ${styles.container}`}>
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
          <div className={`${styles.label} ${labelclassName}`}>{label}</div>
        ) : null}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;
