import React from 'react';
import Icon from '../Icon';
import {
  FocusEventHandler,
  ChangeEventHandler,
  ChangeEvent,
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import styles from './Select.module.scss';

export type SelectInterfaceT = {
  focusSelect: Function;
  isDirty: Function;
};

export type OptionT = {
  value: string;
  title: string;
};

type SelectPropsT = {
  label: string;
  options: OptionT[];
  name: string;
  info?: string;
  classProp?: string;
  onBlur?: Function;
  onFocus?: Function;
  onChange?: Function;
  validator?: Function;
  required?: boolean;
  isError?: boolean;
  customErrorMessage?: string;
  value: string | number | readonly string[] | undefined;
  id?: string;
};

const Select = forwardRef(
  (
    {
      label,
      name,
      options,
      info = '',
      classProp = '',
      onChange,
      onBlur,
      onFocus,
      validator = () => true,
      required = false,
      isError,
      customErrorMessage,
      value,
      id,
    }: SelectPropsT,
    ref
  ) => {
    const [isValid, setIsValid] = useState<boolean>(false);
    const [isDirty, setIsDirty] = useState<boolean>(false);
    const [showError, setShowError] = useState<boolean>(false);
    const [showInfo, setShowInfo] = useState<boolean>(false);
    const [initialValue, setInitialValue] = useState(value); // used to check if dirty
    const [currentErrorMessage, setCurrentErrorMessage] = useState<string>(
      customErrorMessage ? customErrorMessage : ''
    );
    const selectRef = useRef<HTMLSelectElement>(null);

    /**
     * Exposed Component API
     */
    useImperativeHandle(ref, () => {
      return {
        focusSelect: () => selectRef.current?.focus(),
        isDirty: () => isDirty,
      };
    });

    /**
     * Error UI logic
     */
    useEffect(() => {
      setShowError(isError || (isDirty && !isValid));
    }, [isDirty, isValid, isError]);

    useEffect(() => {
      setShowInfo(Boolean(info.length) && !showError);
    }, [info, showError]);

    /**
     * Handle Select Change
     * @param event
     */
    const handleOnChange: ChangeEventHandler<HTMLSelectElement> = (
      event: ChangeEvent<HTMLSelectElement>
    ): ChangeEvent<HTMLSelectElement> => {
      const newValue = event.target.value;
      typeof onChange === 'function' && onChange(event);

      // If initial value was empty any change makes form dirty
      const isDirty = initialValue === '' ? true : initialValue !== newValue;
      setIsDirty(isDirty);
      return event;
    };

    /**
     * Handle Blur
     * @param event
     */
    const handleOnBlur: FocusEventHandler<HTMLSelectElement> = (event) => {
      typeof onBlur === 'function' && onBlur(event);
    };

    /**
     * Handle Focus
     */
    const handleOnFocus = () => {
      typeof onFocus === 'function' && onFocus();
    };

    /**
     * Validate Select
     */
    useEffect(() => {
      const select = selectRef.current;
      if (!select) return;

      const valid = select.validity.valid;
      const validationMessage = select.validationMessage;
      const validation = valid && validator(value);

      // Prop error message takes precedence
      if (!validation) {
        const message = customErrorMessage
          ? customErrorMessage
          : validationMessage;
        message ? setCurrentErrorMessage(message) : null;
      }
      setIsValid(validation);
    }, [value, customErrorMessage, validator]);

    return (
      <div
        className={`${styles.select_wrapper}  ${
          showError ? styles.select_error : null
        } ${classProp}`}
      >
        <label htmlFor={id}>
          {label}
          <span> {required ? '*' : ''}</span>
        </label>

        <div className={styles.select_container}>
          <select
            ref={selectRef}
            id={id}
            name={name}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            onFocus={handleOnFocus}
            value={value}
            className={styles.select}
          >
            {options.map(({ value: optionValue, title }, i) => {
              return (
                <option key={i} value={optionValue}>
                  {title}
                </option>
              );
            })}
          </select>
          <Icon classProp={styles.arrow} name="chevron-down" />
        </div>

        {/* Error Message */}
        {showError ? (
          <span className={styles.error_message}>{currentErrorMessage}</span>
        ) : (
          ''
        )}

        {/* Additional Select Information  */}
        {showInfo ? <span className={styles.info}>{info}</span> : ''}
      </div>
    );
  }
);

Select.displayName = 'Select';
export default Select;
