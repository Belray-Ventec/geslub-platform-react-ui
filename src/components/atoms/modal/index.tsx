import React from 'react';
import styles from './modal.module.css';
import { modalPosition, modalSize } from './const';
import { ModalProps } from './types';
import { Heading } from '../heading';
import { Xmark } from '../../../assets/icons';

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
  showOk,
  className,
  showCloseIcon = true,
  showFooter = false,
  style,
  ...props
}: ModalProps) {
  if (isOpen) {
    return (
      <section
        role="dialog"
        className={[
          styles.modal_position,
          modalPosition[position],
          className,
        ].join(' ')}
      >
        <div
          onClick={() => onRequestClose()}
          className={styles.modal_container}
          tabIndex={-1}
        ></div>
        <div
          {...props}
          style={{ ...style }}
          className={[styles.modal, modalSize[size]].join(' ')}
        >
          <header
            style={{ backgroundColor: themeColor ?? undefined }}
            className={styles.modal_header}
          >
            <Heading
              title={title}
              className={styles.modal_header_title}
              as="h2"
              size="4xs"
            >
              {title}
            </Heading>
            <button
              onClick={() => onRequestClose()}
              className={styles.modal_header_title_close}
            >
              <Xmark size={25} fill="#fff" />
            </button>
          </header>
          <div className={styles.modal_body}>{children}</div>
          {showFooter && (
            <div className={styles.modal_footer}>
              {showOk ? (
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
              ) : (
                <div></div>
              )}
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
          )}
        </div>
      </section>
    );
  }

  return <></>;
}
