import { ModalBodyProps, ResponsiveValue } from '@chakra-ui/react';
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
  size?:
    | ResponsiveValue<
        | (string & Record<string, never>)
        | 'sm'
        | 'md'
        | 'lg'
        | 'xl'
        | '2xl'
        | 'xs'
        | '3xl'
        | '4xl'
        | '5xl'
        | '6xl'
        | 'full'
      >
    | undefined;

  children: React.ReactNode;
}
