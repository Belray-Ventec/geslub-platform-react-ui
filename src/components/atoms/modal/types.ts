import { ModalBodyProps } from '@chakra-ui/react';
export interface ModalProps extends ModalBodyProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  hiddenFooter?: boolean;
  showCloseButton?: boolean;
  actionText?: string;
  cancelText?: string;
  onAction?: () => void;
  onCancel?: () => void;
  hiddenAction?: boolean;
  backgroundHeader?: string;
  minH?: string;

  children: React.ReactNode;
}
