import React, { useState, forwardRef, useImperativeHandle } from 'react';
import styles from './Toast.module.scss';
import ToastMessage from './ToastMessage';

export type ToastPropsT = {
  classProp?: string;
};

export type ToastInterfaceT = {
  dispatchToast: Function;
};

export enum ToastTypesE {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning',
}

export enum ToastLocationE {
  TOP_RIGHT = 'top_right',
  TOP_LEFT = 'top_left',
  BOTTOM_RIGHT = 'bottom_right',
  BOTTOM_LEFT = 'bottom_left',
}

export type NewToastT = {
  title: string;
  description: string;
  duration?: number;
  autoClose?: boolean;
  type?: ToastTypesE;
  callback?: Function;
  callbackCta?: string;
  location?: ToastLocationE;
  pauseOnHover?: boolean;
};

export interface ToastI extends NewToastT {
  id: string;
}

const Toast = forwardRef(({ classProp = '' }: ToastPropsT, ref) => {
  const [topRightToasts, setTopRightToasts] = useState<ToastI[]>([]);
  const [topLeftToasts, setTopLeftToasts] = useState<ToastI[]>([]);
  const [bottomRightToasts, setBottomRightToasts] = useState<ToastI[]>([]);
  const [bottomLeftToasts, setBottomLeftToasts] = useState<ToastI[]>([]);
  /**
   * Exposed Component API
   */
  useImperativeHandle(ref, (): ToastInterfaceT => {
    return {
      dispatchToast: dispatchToast,
    };
  });

  const dispatchToast = (newToast: NewToastT) => {
    const toast = {
      ...newToast,
      id: String(Date.now()),
    };

    switch (toast.location) {
      case ToastLocationE.TOP_RIGHT:
        setTopRightToasts((toasts) => {
          return [toast, ...toasts];
        });
        break;

      case ToastLocationE.TOP_LEFT:
        setTopLeftToasts((toasts) => {
          return [toast, ...toasts];
        });
        break;

      case ToastLocationE.BOTTOM_RIGHT:
        setBottomRightToasts((toasts) => {
          return [toast, ...toasts];
        });
        break;

      case ToastLocationE.BOTTOM_LEFT:
        setBottomLeftToasts((toasts) => {
          return [toast, ...toasts];
        });
        break;

      default:
        break;
    }
  };

  const filterToasts = (toasts: ToastI[], id: string) =>
    toasts.filter((toast) => toast.id != id);

  const selfDestruct = (id: string, location: ToastLocationE) => {
    switch (location) {
      case ToastLocationE.TOP_RIGHT:
        setTopRightToasts((state) => filterToasts(state, id));
        break;

      case ToastLocationE.TOP_LEFT:
        setTopLeftToasts((state) => filterToasts(state, id));
        break;

      case ToastLocationE.BOTTOM_RIGHT:
        setBottomRightToasts((state) => filterToasts(state, id));
        break;

      case ToastLocationE.BOTTOM_LEFT:
        setBottomLeftToasts((state) => filterToasts(state, id));
        break;

      // Default to Top Right
      default:
        setTopRightToasts((state) => filterToasts(state, id));
        break;
    }
  };

  const renderToast = (toast: ToastI) => {
    return (
      <ToastMessage selfDestruct={selfDestruct} key={toast.id} {...toast} />
    );
  };

  return (
    <div id="lily_toast" className={classProp}>
      {/* TOP RIGHT  */}
      {Boolean(topRightToasts.length) && (
        <div className={styles.top_right}>
          {topRightToasts.map(renderToast)}
        </div>
      )}

      {/* TOP LEFT  */}
      {Boolean(topLeftToasts.length) && (
        <div className={styles.top_left}>{topLeftToasts.map(renderToast)}</div>
      )}

      {/* BOTTOM RIGHT  */}
      {Boolean(bottomRightToasts.length) && (
        <div className={styles.bottom_right}>
          {bottomRightToasts.map(renderToast)}
        </div>
      )}

      {/* BOTTOM LEFT  */}
      {Boolean(bottomLeftToasts.length) && (
        <div className={styles.bottom_left}>
          {bottomLeftToasts.map(renderToast)}
        </div>
      )}
    </div>
  );
});

Toast.displayName = 'Toast';
export default Toast;
