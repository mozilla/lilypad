import React from 'react';
import {
  ChangeEventHandler,
  ChangeEvent,
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import styles from './Input.module.scss';
import Icon, { IconT } from '../Icon/Icon';

/**
 * Methods available to access the component in the parent component. These would most likley
 * only be used outside of the form context. Ie search input or some type of filter input.
 */
export type InputInterfaceT = {
  focusInput: Function;
  isDirty: Function;
};

export type InputT = 'text' | 'password' | 'email' | 'number' | 'tel';

export enum InputIconColorE {
  SUCCESS = 'success',
  ERROR = 'error',
  DEFAULT = 'default',
}

type InputProps = {
  label: string;
  placeholder: string;
  name: string;
  type?: InputT;
  info?: string;
  classProp?: string;
  onChange?: Function;
  validator?: Function;
  required?: boolean;
  customErrorMessage?: string;
  pattern?: string;
  maxLength?: number;
  minLength?: number;
  value: string | number | readonly string[] | undefined;
  icon?: IconT;
  iconColor?: InputIconColorE;
};

const Input = forwardRef(
  (
    {
      label,
      placeholder,
      type = 'text',
      name,
      info = '',
      classProp = '',
      onChange,
      validator = () => true,
      required = false,
      customErrorMessage,
      pattern,
      maxLength,
      minLength,
      value,
      icon,
      iconColor = InputIconColorE.DEFAULT,
    }: InputProps,
    ref
  ) => {
    const [isValid, setIsValid] = useState<boolean>(false);
    const [isDirty, setIsDirty] = useState<boolean>(false);
    const [initialValue, setInitialValue] = useState(value); // used to check if dirty
    const [currentErrorMessage, setCurrentErrorMessage] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    /**
     * Exposed Component API
     */
    useImperativeHandle(ref, () => {
      return {
        focusInput: () => inputRef.current?.focus(),
        isDirty: () => isDirty,
      };
    });

    /**
     * Handle Input Change
     * @param event
     */
    const handleOnChange: ChangeEventHandler<HTMLInputElement> = (
      event: ChangeEvent<HTMLInputElement>
    ) => {
      const newValue = event.target.value;
      onChange && onChange(newValue);
      // If initial value was empty any change makes form dirty
      const isDirty = initialValue === '' ? true : initialValue !== newValue;
      setIsDirty(isDirty);
    };

    /**
     * Validate Input
     */
    useEffect(() => {
      const input = inputRef.current;
      if (!input) return;

      const valid = input.validity.valid;
      const validationMessage = input.validationMessage;
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

    /**
     * Error UI logic
     */
    const showError = isDirty && !isValid;
    const showInfo = info.length && !showError;

    return (
      <div
        className={`${styles.input_wrapper}  ${
          showError ? styles.input_error : null
        } ${classProp}`}
      >
        <label>
          {label}
          <span> {required ? '*' : ''}</span>
        </label>

        <input
          ref={inputRef}
          type={type}
          name={name}
          value={value}
          required={required}
          placeholder={placeholder ? placeholder : label}
          onChange={handleOnChange}
          maxLength={maxLength}
          minLength={minLength}
          pattern={pattern}
          className={icon && styles.has_icon}
        />

        {icon ? (
          <Icon name={icon} classProp={styles['icon_' + iconColor]} />
        ) : null}

        {/* Error Message */}
        {showError ? (
          <span className={styles.error_message}>{currentErrorMessage}</span>
        ) : (
          ''
        )}

        {/* Additional Input Information  */}
        {showInfo ? <span className={styles.info}>{info}</span> : ''}
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
