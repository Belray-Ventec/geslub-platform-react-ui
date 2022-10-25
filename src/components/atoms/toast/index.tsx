import React from 'react';
import ReactDOM from 'react-dom';

import styles from './toast.module.css';
import { Paragraph } from '../paragraph';
import { Icon } from '../icon';
import { Xmark } from '../../../assets/icons';
import { PositionType } from '../../../contexts/toastContext/type';

interface ToastProps {
  title?: string;
  description: string;
  status: 'success' | 'error' | 'warning' | 'info';
  isClosable?: boolean;
  onClose: (props: ToastProps) => void;
  position?: PositionType;
}

function Toast({
  title,
  description,
  status,
  onClose,
  isClosable = false,
  position = 'top-left',
}: ToastProps) {
  const statusStyle = {
    success: styles.success,
    warning: styles.warning,
    error: styles.error,
    info: styles.info,
  };

  return (
    <>
      {ReactDOM.createPortal(
        <div
          className={[
            styles.toast_container,
            statusStyle[status],
            styles.fadeIn,
          ].join(' ')}
        >
          <div>
            <Icon
              color="#fff"
              size={15}
              icon={status === 'success' ? 'CircleCheck' : 'Info'}
            />
          </div>
          <div>
            {title && (
              <Paragraph className={styles.title} size="sm">
                {title}
              </Paragraph>
            )}
            <Paragraph className={styles.description} size="xs">
              {description}
            </Paragraph>
          </div>
          {isClosable && (
            <div
              className={styles.close_container}
              onClick={() =>
                onClose({ title, description, status, onClose, isClosable })
              }
            >
              <Xmark fill="#fff" size={15} />
            </div>
          )}
        </div>,
        document.querySelector(`#toastregion${position}`)!
      )}
    </>
  );
}

export default React.memo(Toast);
