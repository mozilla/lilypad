import React, {
  PropsWithChildren,
  useEffect,
  useState,
  useCallback,
  Children,
  ReactNode,
} from 'react';

/**
 * FADE IN
 */
type FadeInPropsT = {
  visible: boolean;
  animation?: string;
  onComplete?: () => void;
  children: ReactNode;
  classProp?: string;
};

const FadeIn = ({
  visible = true,
  onComplete,
  animation,
  children,
  classProp = '',
}: FadeInPropsT) => {
  const [isOpen, setIsOpen] = useState<boolean>(visible);
  const [isVisible, setIsVisible] = useState<boolean>(visible);
  const arrayChildren = Children.toArray(children);

  /**
   * Watch visible prop and updates state
   */
  useEffect(() => {
    // only update setIsVisible on show
    visible && setIsVisible(visible);
    setIsOpen(visible);
  }, [visible]);

  /**
   * Animation has completed call back
   */
  const handleOnComplete = useCallback(() => {
    if (!isOpen) setIsVisible(false);
    onComplete && onComplete();
  }, [isOpen]);

  return (
    <FadeContents
      isVisible={isOpen}
      onComplete={handleOnComplete}
      animation={animation}
      classProp={classProp}
    >
      {Children.map(arrayChildren, (child, i) => {
        return isVisible && <>{child}</>;
      })}
    </FadeContents>
  );
};

/**
 * FADE IN CONTENTS
 */

type FadeContentsPropsT = {
  isVisible: boolean;
  animation?: string;
  onComplete: () => void;
  children: ReactNode;
  classProp?: string;
};

const FadeContents = ({
  isVisible,
  onComplete,
  children,
  animation = 'translateY(20px)',
  classProp = '',
}: PropsWithChildren<FadeContentsPropsT>) => {
  const [maxIsVisible, setMaxIsVisible] = useState(0);
  const arrayChildren = Children.toArray(children);

  /**
   * Track fade in children and fade
   * them in accordingly
   */
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
