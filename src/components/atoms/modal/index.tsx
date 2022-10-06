import React from 'react';
import styles from './modal.module.css';
import { modalPosition, modalSize } from './const';
import { ModalProps } from './types';

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
  if (isOpen) {
    return (
      <div
        role="dialog"
        className={[styles.modal_position, modalPosition[position]].join(' ')}
      >
        <div
          onClick={() => onRequestClose()}
          className={styles.modal_container}
          tabIndex={-1}
        ></div>
        <div className={[styles.modal, modalSize[size]].join(' ')}>
          <div
            style={{ backgroundColor: themeColor ?? undefined }}
            className={styles.modal_header}
          >
            <h2 className={styles.modal_title}>{title}</h2>
          </div>
          <div className={styles.modal_body}>{children}</div>
          <div className={styles.modal_footer}>
            <button
              style={{ backgroundColor: themeColor ?? undefined }}
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
