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
        onAction={() => console.log('Action')}
        title={title}
        size="2xl"
        isOpen={isOpen}
        onClose={onClose}
      >
        {children}
      </Modal>
    </>
  );
}
