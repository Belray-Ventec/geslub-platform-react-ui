import React from 'react';
import PropTypes from 'prop-types';
import styles from './modal.module.css';

interface ModalProps {
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

export function Modal({
  title,
  children,
  isOpen,
  onRequestClose,
  position = 'center',
  onOk,
  okText = 'Ok',
  onCancel,
  cancelText = 'Cancel',
  size = 'medium',
  themeColor,
}: ModalProps) {
  const positionModal =
    position === 'top'
      ? styles.top
      : position === 'bottom'
      ? styles.bottom
      : styles.center;

  const sizeModal =
    size === 'small'
      ? styles.modal_small
      : size === 'medium'
      ? styles.modal_medium
      : size === 'large'
      ? styles.modal_large
      : size === 'extra_large'
      ? styles.modal_extra_large
      : styles.modal_full;

  if (isOpen) {
    return (
      <div
        role="dialog"
        className={[styles.modal_position, positionModal].join(' ')}
      >
        <div
          onClick={() => onRequestClose()}
          className={styles.modal_container}
          tabIndex={-1}
          role="dialog"
        ></div>
        <div className={[styles.modal, sizeModal].join(' ')}>
          <div
            style={{ backgroundColor: themeColor ? themeColor : '' }}
            className={styles.modal_header}
          >
            <h2 className={styles.modal_title}>{title}</h2>
          </div>
          <div className={styles.modal_body}>{children}</div>
          <div className={styles.modal_footer}>
            <button
              style={{ backgroundColor: themeColor ? themeColor : '' }}
              className={styles.modal_ok}
              onClick={() => {
                onOk && onOk();
                onRequestClose();
              }}
            >
              {okText}
            </button>
            <button
              className={styles.modal_cancel}
              onClick={() => {
                onCancel && onCancel();
                onRequestClose();
              }}
            >
              {cancelText}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <></>;
}

Modal.prototypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  position: PropTypes.oneOf(['top', 'center', 'bottom']),
  onOk: PropTypes.func,
  okText: PropTypes.string,
  onCancel: PropTypes.func,
  cancelText: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extra_large', 'full']),
  themeColor: PropTypes.string,
};
