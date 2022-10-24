import { createContext, useCallback, useEffect, useState } from 'react';
import React from 'react';
import styles from './contexttoast.module.css';
import { Toast } from '../../components/atoms/toast';
import {
  PositionType,
  ToastContainerProps,
  ToastContextProviderProps,
  ToastProps,
} from './type';
import { arrayOfPositions } from './const';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const ToastContext = createContext((_toast: ToastProps) => {});

export default ToastContext;

export function ToastContextProvider({ children }: ToastContextProviderProps) {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  useEffect(() => {
    if (toasts.length > 0) {
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
      {arrayOfPositions.map((position) => (
        <ToastContainer
          key={position}
          toasts={toasts}
          closeToast={closeToast}
          position={position as PositionType}
        />
      ))}
    </ToastContext.Provider>
  );
}

function ToastContainer({ toasts, closeToast, position }: ToastContainerProps) {
  const positionStyle = {
    top: styles.top,
    bottom: styles.bottom,
    'top-left': styles.top_left,
    'top-right': styles.top_right,
    'bottom-left': styles.bottom_left,
    'bottom-right': styles.bottom_right,
  };

  return (
    <div
      role={'region'}
      className={[styles.toastsContainer, positionStyle[position]].join(' ')}
    >
      {toasts.map(
        (toast, idx) =>
          toast.position === position && (
            <Toast
              key={idx}
              status={toast.status}
              title={toast.title}
              description={toast.description}
              isClosable={toast.isClosable}
              onClose={(item) => closeToast(item)}
            />
          )
      )}
    </div>
  );
}
