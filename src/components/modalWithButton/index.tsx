import React, { useState } from 'react';
import { Button } from '../button';
import { Modal } from '../modal';

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
      <Button
        primary
        text={'Open Modal'}
        onClick={() => setIsModalOpen(true)}
      />
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
