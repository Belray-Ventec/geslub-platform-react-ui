export interface ModalProps {
  title: string;
  children: React.ReactNode;
  onCancel?: () => void;
  onOk?: () => void;
  okText?: string;
  cancelText?: string;
  isOpen: boolean;
  onRequestClose: () => void;
  position?: 'top' | 'center' | 'bottom';
  size?: 'small' | 'medium' | 'large' | 'extra_large' | 'full';
  themeColor?: string;
}
