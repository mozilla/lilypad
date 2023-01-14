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
  value: number;
  start?: number;
  finish?: number;
  classProp?: string;
};

const RangeSlider = ({
  value,
  finish = 100,
  classProp = '',
}: RangeSliderPropsT) => {
  const rangeInput = useRef<HTMLInputElement>(null);
  const [internalValue, setInternalValue] = useState(value);
  const [isOpen, setIsOpen] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const calcInternalValue = Math.round((value / finish) * 100);
    setInternalValue(calcInternalValue);
  }, [value, finish]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    console.log('e', e.target.value);
    const value = Number(e.target.value);
    setInternalValue(value);
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

  return (
    <div className={`${styles.wrapper} ${classProp}`}>
      <FadeIn isVisible={isOpen} onComplete={handleOnComplete}>
        {isVisible && (
          <span
            style={{
              left: `calc(${internalValue}% + (${6 - internalValue * 0.15}px))`,
            }}
            className={styles.bubble}
          >
            {getDisplayValue()}
          </span>
        )}
      </FadeIn>
      <div className="flex">
        <div className={styles.start}>0</div>
        <input
          onChange={handleChange}
          value={internalValue}
          ref={rangeInput}
          type="range"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <div className={styles.end}>{finish}</div>
      </div>
      <label className="mt-5 block">
        <Badge
          name={`Value: ${internalValue}`}
          category={BadgeCategoriesE.PRIMARY}
        />
      </label>
    </div>
  );
};

RangeSlider.displayName = 'RangeSlider';
export default RangeSlider;
