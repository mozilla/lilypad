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
import styles from './TextArea.module.scss';
import Icon, { IconT } from '../Icon';
import ToolTip from '../ToolTip';

/**
 * Methods available to access the component in the parent component. These would most likley
 * only be used outside of the form context. Ie search input or some type of filter input.
 */
export type TextAreaInterfaceT = {
  focusTextArea: Function;
  isDirty: Function;
};

export type TextAreaIconColorT = 'success' | 'error' | 'default';

type TextAreaPropsT = {
  label: string;
  showLabel?: boolean;
  placeholder: string;
  toolTip?: string;
  name: string;
  info?: string;
  disabled?: boolean;
  validator?: Function;
  required?: boolean;
  isError?: boolean;
  customErrorMessage?: string;
  maxLength?: number;
  minLength?: number;
  value: string | number | readonly string[] | undefined;
  icon?: IconT;
  iconColor?: TextAreaIconColorT;
  readOnly?: boolean;
  id?: string;
  onBlur?: Function;
  onFocus?: Function;
  onChange?: Function;
  classProp?: string;
};

const TextArea = forwardRef(
  (
    {
      label,
      showLabel = true,
      placeholder,
      toolTip,
      name,
      info = '',
      classProp = '',
      onChange,
      disabled,
      onBlur,
      onFocus,
      validator = () => true,
      required = false,
      isError,
      customErrorMessage,
      maxLength,
      minLength,
      readOnly,
      value,
      icon,
      iconColor = 'default',
      id,
    }: TextAreaPropsT,
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
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    /**
     * Exposed Component API
     */
    useImperativeHandle(ref, () => {
      return {
        focusTextArea: () => textAreaRef.current?.focus(),
        isDirty: () => isDirty,
      };
    });

    /**
     * Validate TextArea
     */
    useEffect(() => {
      const textArea = textAreaRef.current;
      if (!textArea) return;

      const valid = textArea.validity.valid;
      const validationMessage = textArea.validationMessage;
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
      setShowInfo(Boolean(info.length) && !showError);
    }, [info, showError]);

    /**
     * Handle TextArea Change
     * @param event
     */
    const handleOnChange: ChangeEventHandler<HTMLTextAreaElement> = (
      event: ChangeEvent<HTMLTextAreaElement>
    ): ChangeEvent<HTMLTextAreaElement> => {
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
    const handleOnBlur: FocusEventHandler<HTMLTextAreaElement> = (event) => {
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
        className={`${styles.text_area_wrapper}  ${
          showError ? styles.text_area_error : null
        } ${classProp}`}
      >
        {showLabel && (
          <label className={styles.label}>
            {label}
            <span> {required ? '*' : ''}</span>
            {toolTip && (
              <ToolTip description={toolTip} classProp={styles.tool_tip}>
                <Icon name="info" />
              </ToolTip>
            )}
          </label>
        )}

        <div className={styles.text_area_container}>
          <textarea
            readOnly={readOnly}
            ref={textAreaRef}
            id={id}
            name={name}
            value={value}
            required={required}
            placeholder={placeholder ? placeholder : label}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            onFocus={handleOnFocus}
            disabled={disabled}
            maxLength={maxLength}
            minLength={minLength}
            className={`${icon && styles.has_icon} ${
              showError && styles.has_error
            }`}
          ></textarea>

          {icon ? (
            <Icon name={icon} classProp={styles['icon_' + iconColor]} />
          ) : null}
        </div>

        {/* Error Message */}
        {showError ? (
          <span className={styles.error_message}>{currentErrorMessage}</span>
        ) : (
          ''
        )}

        {/* Additional TextArea Information  */}
        {showInfo ? <span className={styles.info}>{info}</span> : ''}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';
export default TextArea;
