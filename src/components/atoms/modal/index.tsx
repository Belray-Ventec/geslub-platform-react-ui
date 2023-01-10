import React from 'react';
import { ModalProps } from './types';
import {
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Modal as ChakraModal,
} from '@chakra-ui/modal';
import { Button } from '@chakra-ui/button';

export function Modal({
  title,
  children,
  isOpen,
  onClose,
  actionText = 'Aceptar',
  cancelText = 'Cancelar',
  hiddenFooter = false,
  onCancel,
  onAction,
  hiddenAction = false,
  backgroundHeader,
  ...props
}: ModalProps) {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose} {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          color={'onPrimary'}
          bg={backgroundHeader ? backgroundHeader : 'primary'}
        >
          {title}
        </ModalHeader>
        <ModalCloseButton color={'onPrimary'} />
        <ModalBody>{children}</ModalBody>
        {!hiddenFooter && (
          <ModalFooter>
            {!hiddenAction && (
              <Button
                variant="primary"
                mr={3}
                onClick={() => onAction && onAction()}
              >
                {actionText}
              </Button>
            )}
            <Button
              variant="ghost"
              onClick={() => {
                onClose();
                onCancel && onCancel();
              }}
            >
              {cancelText}
            </Button>
          </ModalFooter>
        )}
      </ModalContent>
    </ChakraModal>
  );
}
