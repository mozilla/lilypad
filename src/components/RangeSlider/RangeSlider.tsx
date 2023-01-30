import React, {
  useRef,
  ChangeEventHandler,
  ChangeEvent,
  useState,
  useCallback,
  useEffect,
} from 'react';
import Badge, { BadgeCategoriesE } from '../Badge';
import FadeIn from '../util/FadeIn';
import styles from './RangeSlider.module.scss';

type RangeSliderPropsT = {
  label: string;
  name: string;
  id?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value: number;
  finish?: number;
  classProp?: string;
};

const RangeSlider = ({
  label,
  name,
  id,
  onChange,
  value,
  finish = 100,
  classProp = '',
}: RangeSliderPropsT) => {
  const rangeInput = useRef<HTMLInputElement>(null);
  const [internalValue, setInternalValue] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const calcInternalValue = Math.round((value / finish) * 100);
    setInternalValue(calcInternalValue);
  }, [value, finish]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const value = Number(event.target.value);
    setInternalValue(value);
    typeof onChange === 'function' && onChange(event);
  };

  /**
   * Mouse Enter
   */
  const handleMouseEnter = () => {
    setIsVisible(true);
    setIsOpen(true);
  };

  /**
   * Mouse Leave
   */
  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  /**
   * On fade out complete
   */
  const handleOnComplete = useCallback(() => {
    if (!isOpen) {
      setIsVisible(false);
    }
  }, [isOpen]);

  const getDisplayValue = () => {
    // find out what percent finish is of 100
    return Math.round((finish / 100) * internalValue);
  };

  return finish < value ? (
    <span className="body-error">
      <b>"Value"</b> must be smaller then <b>"Finish"</b>{' '}
    </span>
  ) : (
    <div className={`${styles.wrapper} ${classProp}`}>
      <label className="sr-only">{label}</label>
      <FadeIn isVisible={isOpen} onComplete={handleOnComplete}>
        {isVisible && (
          <span
            style={{
              left: `calc(${internalValue}% + (${8 - internalValue * 0.2}px))`,
            }}
            className={styles.bubble}
          >
            {getDisplayValue()}
          </span>
        )}
      </FadeIn>
      <div className={styles.start}>0</div>
      <input
        onChange={handleChange}
        value={internalValue}
        ref={rangeInput}
        id={id}
        name={name}
        type="range"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        step="10"
        list="markers"
      />
      <div className={styles.end}>{finish}</div>

      <div className="mt-5 block">
        <Badge
          name={`Value: ${getDisplayValue()}`}
          category={BadgeCategoriesE.PRIMARY}
        />
      </div>
    </div>
  );
};

RangeSlider.displayName = 'RangeSlider';
export default RangeSlider;
