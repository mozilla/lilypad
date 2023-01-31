import React from 'react';
import { PropsWithChildren, useEffect, useState, Children } from 'react';

export type FadeInPropsT = {
  isVisible: boolean;
  onComplete?: Function;
  animation?: string;
  classProp?: string;
};

const FadeIn = (props: PropsWithChildren<FadeInPropsT>) => {
  const {
    isVisible,
    onComplete,
    animation = 'translateY(20px)',
    classProp = '',
  } = props;

  const [maxIsVisible, setMaxIsVisible] = useState(0);
  const arrayChildren = Children.toArray(props.children);

  useEffect(() => {
    // Get Number of children to fade in
    let count = Children.count(arrayChildren);

    // Animate all children out
    if (!isVisible) count = 0;

    // Fire (optional) callback when all visible
    if (count === maxIsVisible) {
      const timeout = setTimeout(() => {
        if (onComplete) onComplete();
      }, 500);
      return () => clearTimeout(timeout);
    }

    // Increment or decrement MaxIsVisible
    const addOrSubtractOne = count > maxIsVisible ? 1 : -1;
    const timeout = setTimeout(() => {
      setMaxIsVisible((state) => state + addOrSubtractOne);
    }, 50);

    return () => clearTimeout(timeout);
  }, [maxIsVisible, isVisible, onComplete, arrayChildren]);

  return (
    <div className={`${classProp}`}>
      {Children.map(arrayChildren, (child, i) => {
        return (
          <div
            style={{
              transition: `opacity 500ms, transform 500ms`,
              transform: maxIsVisible > i ? 'none' : animation,
              opacity: maxIsVisible > i ? 1 : 0,
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

export default FadeIn;
