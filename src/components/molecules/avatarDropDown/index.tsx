import React, { useState } from 'react';
import { Avatar } from '../../atoms/avatar';
import styles from './avatarDropDown.module.css';
import { AvatarDropDownProps } from './types';

export function AvatarDropDown({
  src,
  avatarTitle,
  size = 'md',
  children,
  right,
}: AvatarDropDownProps) {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <>
      <div className={styles.showOptionsContainer}>
        <div
          onClick={() => setShowOptions(!showOptions)}
          className={styles.container}
        >
          <Avatar
            className={!showOptions ? styles.scaleImg : ''}
            size={size}
            src={src}
            title={avatarTitle}
          ></Avatar>
        </div>
        {showOptions && (
          <div
            className={[styles.content, right ? styles.right : undefined].join(
              ' '
            )}
          >
            {children}
          </div>
        )}
      </div>
      {showOptions && (
        <div
          onClick={() => setShowOptions(!showOptions)}
          className={styles.overlay}
        ></div>
      )}
    </>
  );
}
