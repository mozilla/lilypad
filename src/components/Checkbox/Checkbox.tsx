import React, {
  forwardRef,
  useRef,
  useImperativeHandle,
  ChangeEventHandler,
  ChangeEvent,
} from 'react';
import styles from './Checkbox.module.scss';

type CheckboxPropsT = {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  classProp?: string;
  labelClassProp?: string;
  onChange: Function;
};

const Checkbox = forwardRef(
  ({ classProp, label, disabled, checked, onChange }: CheckboxPropsT, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    /**
     * Exposed Component API
     */
    useImperativeHandle(ref, () => {
      return {};
    });

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
        <div className={`${styles.checkmark} ${disabled && styles.checkmark_disabled}`} />

        {label ? <div className={styles.label}>{label}</div> : null}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;
