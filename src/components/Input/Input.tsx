import React from 'react';
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
import styles from './Input.module.scss';
import Icon, { IconT } from '../Icon';
import ToolTip from '../ToolTip';

/**
 * Methods available to access the component in the parent component. These would most likley
 * only be used outside of the form context. Ie search input or some type of filter input.
 */
export type InputInterfaceT = {
  focusInput: Function;
  isDirty: Function;
};

export type InputT =
  | 'text'
  | 'password'
  | 'email'
  | 'number'
  | 'tel'
  | 'time'
  | 'date'
  | 'search'
  | 'url'
  | 'datetime-local';

export type InputIconColorT = 'success' | 'error' | 'default';

type InputProps = {
  label: string;
  placeholder: string;
  toolTip?: string;
  name: string;
  type?: InputT;
  info?: string;
  validator?: Function;
  required?: boolean;
  showRequired?: boolean;
  isError?: boolean;
  customErrorMessage?: string;
  pattern?: string;
  maxLength?: number;
  minLength?: number;
  value: string | number | readonly string[] | undefined;
  icon?: IconT;
  iconColor?: InputIconColorT;
  id?: string;
  readOnly?: boolean;
  showLabel?: boolean;
  onBlur?: Function;
  onFocus?: Function;
  onChange?: Function;
  mask?: RegExp;
  autoComplete?: 'on' | 'off';
  className?: string;
};

const Input = forwardRef(
  (
    {
      label,
      placeholder,
      toolTip,
      type = 'text',
      name,
      info = '',
      onChange,
      onFocus,
      validator = () => true,
      required = false,
      showRequired = true,
      isError,
      customErrorMessage,
      pattern,
      maxLength,
      minLength,
      value,
      icon,
      iconColor = 'default',
      id,
      readOnly,
      showLabel = true,
      onBlur,
      mask,
      autoComplete = 'on',
      className = '',
    }: InputProps,
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
    useEffect(() => {
      setShowError(isError || (isDirty && !isValid));
    }, [isDirty, isValid, isError]);

    useEffect(() => {
      setShowInfo(Boolean(info.length));
    }, [info]);

    /**
     * Handle Input Change
     * @param event
     */
    const handleOnChange: ChangeEventHandler<HTMLInputElement> = (
      event: ChangeEvent<HTMLInputElement>
    ): ChangeEvent<HTMLInputElement> => {
      const newValue = event.target.value;

      if (mask && !mask.test(newValue)) return event;
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
    const handleOnBlur: FocusEventHandler<HTMLInputElement> = (event) => {
      typeof onBlur === 'function' && onBlur(event);
    };

    /**
     * Handle Focus
     */
    const handleOnFocus = () => {
      typeof onFocus === 'function' && onFocus();
    };

    return (
      <div
        className={`${styles.input_wrapper}  ${
          showError ? styles.input_error : null
        } ${className}`}
      >
        {showLabel && (
          <label className={styles.label}>
            {label}
            <span> {required && showRequired ? '*' : ''}</span>
            {toolTip && (
              <ToolTip description={toolTip} className={styles.tool_tip}>
                <Icon name="info" />
              </ToolTip>
            )}
          </label>
        )}

        <div className={styles.input_container}>
          <input
            autoComplete={autoComplete}
            readOnly={readOnly}
            ref={inputRef}
            aria-label={label}
            id={id}
            type={type}
            name={name}
            value={value}
            required={required}
            placeholder={placeholder ? placeholder : label}
            onChange={handleOnChange}
            onFocus={handleOnFocus}
            maxLength={maxLength}
            minLength={minLength}
            onBlur={handleOnBlur}
            pattern={pattern}
            className={`${icon && styles.has_icon} ${
              showError && styles.has_error
            }`}
          />

          {icon ? (
            <Icon name={icon} className={styles['icon_' + iconColor]} />
          ) : null}
        </div>

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
