import { ReactNode } from 'react';

export interface ToastContextProviderProps {
  children: ReactNode;
}

export type PositionType =
  | 'top'
  | 'top-right'
  | 'top-left'
  | 'bottom'
  | 'bottom-right'
  | 'bottom-left';

export interface ToastProps {
  title?: string;
  description: string;
  status: 'success' | 'error' | 'warning' | 'info';
  isClosable?: boolean;
  position?: PositionType;
}

export interface ToastContainerProps {
  toasts: ToastProps[];
  closeToast: (prop: ToastProps) => void;
  position: PositionType;
}
