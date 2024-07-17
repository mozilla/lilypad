import React from 'react';
import {
  ReactNode,
  useState,
  useRef,
  useEffect,
  useCallback,
  useImperativeHandle,
  forwardRef,
} from 'react';
import styles from './Dropdown.module.scss';
import FadeIn from '../FadeIn';

export type DropdownT = {
  closeDropdown: Function;
  openDropdown: Function;
};

export type AlignmentT = 'left' | 'right';
type DropdownPropsT = {
  cta: ReactNode;
  content: ReactNode;
  className?: string;
  alignment?: AlignmentT;
  width?: number;
  selfClose?: boolean;
};

const Dropdown = forwardRef(
  (
    {
      cta,
      content,
      width = 320,
      alignment,
      selfClose = true,
      className = '',
    }: DropdownPropsT,
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    /**
     * Exposed Component API
     */
    useImperativeHandle(ref, () => {
      return {
        closeDropdown: closeDropdown,
        openDropdown: openDropdown,
        toggleDropdown: toggleDropdown,
      };
    });

    const closeDropdown = () => setIsOpen(false);

    const openDropdown = () => setIsOpen(true);

    const toggleDropdown = () => setIsOpen((state) => !state);

    /**
     * Setup Click Listener
     */
    useEffect(() => {
      const checkIfClickedOutside = (e: MouseEvent) => {
        // If dropdown open and target not in component, close dropdown.
        if (
          isOpen &&
          containerRef.current &&
          !containerRef.current.contains(e.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', checkIfClickedOutside);
      return () =>
        document.removeEventListener('mousedown', checkIfClickedOutside);
    }, [isOpen]);

    const onToggleClick = useCallback(() => {
      setIsOpen((state) => !state);
    }, []);

    return (
      <div
        ref={containerRef}
        className={`${className} ${styles.dropdown_wrapper}`}
      >
        {/* CTA */}
        <div onClick={onToggleClick}>{cta}</div>

        {/* Dropdown Custom Content */}
        <FadeIn visible={isOpen}>
          <div
            style={{ width: `${width}px` }}
            className={`${styles.content_wrapper} ${
              alignment === 'right' ? styles.right : styles.left
            }`}
            onClick={() => {
              if (selfClose) closeDropdown();
            }}
          >
            {content}
          </div>
        </FadeIn>
      </div>
    );
  }
);

Dropdown.displayName = 'Dropdown';
export default Dropdown;
