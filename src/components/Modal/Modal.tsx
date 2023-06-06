import React, {
  MouseEventHandler,
  ReactNode,
  MouseEvent,
  useRef,
  useState,
  useEffect,
} from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';

type ModalPropsT = {
  children: ReactNode;
  isVisible: Boolean;
  // "hasContainer" gives you the flexibility to put all the children in a pre-formatted modal card, This will be a majority of the time.
  // If you want a custom modal display, set this to false and add whatever you want to the "children"
  hasContainer?: Boolean;
  zIndex?: number;
  isBackdropClickDisabled?: boolean;
  onClose: MouseEventHandler<HTMLDivElement>;
  classProp?: string;
};

const Modal = ({
  children,
  isVisible,
  hasContainer = true,
  zIndex = 10,
  isBackdropClickDisabled = false,
  onClose,
  classProp = '',
}: ModalPropsT) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.getElementById('LP_modal_portal') as Element;
    setMounted(true);
  }, []);

  useEffect(() => {
    const overflow = isVisible ? 'hidden' : 'initial';
    document.body.style.overflow = overflow;

    return () => {
      document.body.style.overflow = 'initial';
    };
  }, [isVisible]);

  /**
   * Backdrop Click
   * @param e MouseEvent
   */
  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (isBackdropClickDisabled) return;

    const { id } = e.target as Element;
    if (id === 'backdropContainer' || id === 'backdropWrapper') {
      onClose && onClose(e);
    }
  };

  return mounted && ref.current && isVisible ? (
    <>
      {ReactDOM.createPortal(
        <div
          id="backdropWrapper"
          className={styles.backdrop_wrapper}
          onClick={handleBackdropClick}
          style={{ zIndex }}
        >
          <div id="backdropContainer" className={styles.backdrop_container}>
            <div
              className={`${classProp} ${
                hasContainer && styles.modal_container
              }`}
            >
              {children}
            </div>
          </div>
        </div>,
        ref.current
      )}
    </>
  ) : null;
};

export default Modal;