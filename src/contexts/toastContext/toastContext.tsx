import { createContext, useCallback, useEffect, useState } from 'react';
import React from 'react';
import styles from './contexttoast.module.css';
import Toast from '../../components/atoms/toast';
import { ToastContextProviderProps, ToastProps } from './type';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const ToastContext = createContext((_toast: ToastProps) => {});

export default ToastContext;

export function ToastContextProvider({ children }: ToastContextProviderProps) {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  useEffect(() => {
    if (toasts.length) {
      const timer = setTimeout(() => {
        setToasts((toasts) => toasts.slice(1));
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [toasts]);

  const addToast = useCallback(
    function (toast: ToastProps) {
      setToasts((toasts) => [...toasts, toast]);
    },
    [setToasts]
  );

  const closeToast = (prop: ToastProps) => {
    const filterToast = toasts.filter(
      (t) => t.description !== prop.description
    );
    setToasts(filterToast);
  };

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      {toasts.map((toast, idx) => (
        <Toast
          position={toast.position}
          key={idx}
          status={toast.status}
          title={toast.title}
          description={toast.description}
          isClosable={toast.isClosable}
          onClose={(item) => closeToast(item)}
        />
      ))}
      <div
        id="toastregionbottom"
        role={'region'}
        className={[styles.toastsContainer, styles.bottom].join(' ')}
      ></div>
      <div
        id="toastregiontop"
        role={'region'}
        className={[styles.toastsContainer, styles.top].join(' ')}
      ></div>
      <div
        id="toastregiontop-left"
        role={'region'}
        className={[styles.toastsContainer, styles.top_left].join(' ')}
      ></div>
      <div
        id="toastregiontop-right"
        role={'region'}
        className={[styles.toastsContainer, styles.top_right].join(' ')}
      ></div>
      <div
        id="toastregionbottom-left"
        role={'region'}
        className={[styles.toastsContainer, styles.bottom_left].join(' ')}
      ></div>
      <div
        id="toastregionbottom-right"
        role={'region'}
        className={[styles.toastsContainer, styles.bottom_right].join(' ')}
      ></div>
    </ToastContext.Provider>
  );
}
