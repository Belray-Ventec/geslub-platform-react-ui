import React, { useState } from 'react';
import { Button } from '../../atoms/button';
import { Modal } from '../../atoms/modal';

interface ModalWithButtonProps {
  title: string;
  children: React.ReactNode;
  position?: 'top' | 'center' | 'bottom';
  size?: 'small' | 'medium' | 'large' | 'extra_large' | 'full';
  themeColor?: string;
  okText?: string;
  cancelText?: string;
  onOk?: () => void;
  onCancel?: () => void;
}

export function ModalWithButton({
  children,
  title,
  position,
  size,
  themeColor,
  okText,
  cancelText,
  onOk,
  onCancel,
}: ModalWithButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button primary onClick={() => setIsModalOpen(true)}>
        Open Modal
      </Button>
      <Modal
        title={title}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        position={position}
        size={size}
        themeColor={themeColor}
        okText={okText}
        cancelText={cancelText}
        onOk={onOk}
        onCancel={onCancel}
      >
        {children}
      </Modal>
    </div>
  );
}
