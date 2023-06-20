import React from 'react';
import { Button } from '@chakra-ui/button';
import { Modal } from '../../atoms/modal';
import { useDisclosure } from '@chakra-ui/hooks';

interface ModalWithButtonProps {
  title: string;
  children: React.ReactNode;
}

export function ModalWithButton({ children, title }: ModalWithButtonProps) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Button variant={'primary'} onClick={onOpen}>
        Open Modal
      </Button>
      <Modal
        minH="100%"
        onAction={() => console.log('Action')}
        title={title}
        isOpen={isOpen}
        onClose={onClose}
      >
        {children}
      </Modal>
    </>
  );
}
