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
import FadeIn from '../FadeIn';

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
  const [animateIn, setAnimateIn] = useState(false);
  const [isModalVisible, setisModalVisible] = useState(isVisible);

  const animateInModal = () => {
    document.body.style.overflow = 'hidden';
    setisModalVisible(isVisible);
    setTimeout(() => {
      setAnimateIn(true);
    }, 50);
  };

  const animateOutModal = () => {
    document.body.style.overflow = 'initial';
    setAnimateIn(false);
    setTimeout(() => {
      setisModalVisible(isVisible);
    }, 500);
  };

  useEffect(() => {
    ref.current = document.getElementById('LP_modal_portal') as Element;
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isVisible) {
      animateInModal();
    } else {
      animateOutModal();
    }

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

  return mounted && ref.current && isModalVisible ? (
    <>
      {ReactDOM.createPortal(
        <div
          id="backdropWrapper"
          className={`${styles.backdrop_wrapper} ${
            animateIn ? styles.animate_in : styles.animate_out
          }`}
          onClick={handleBackdropClick}
          style={{ zIndex }}
        >
          <div id="backdropContainer" className={styles.backdrop_container}>
            <div
              className={`${classProp} ${
                hasContainer && styles.modal_container
              } `}
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
