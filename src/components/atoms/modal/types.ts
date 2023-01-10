import { ModalProps as ChakraModalProps } from '@chakra-ui/react';
export interface ModalProps extends ChakraModalProps {
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

  children: React.ReactNode;
}
