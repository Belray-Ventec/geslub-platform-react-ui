import { CSSProperties, HTMLAttributes } from 'react';

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  children: React.ReactNode;
  onCancel?: () => void;
  onOk?: () => void;
  okText?: string;
  showOk?: boolean;
  cancelText?: string;
  isOpen: boolean;
  onRequestClose: () => void;
  position?: 'top' | 'center' | 'bottom';
  size?: 'small' | 'medium' | 'large' | 'extra_large' | 'full';
  themeColor?: string;
  style?: CSSProperties;
}
