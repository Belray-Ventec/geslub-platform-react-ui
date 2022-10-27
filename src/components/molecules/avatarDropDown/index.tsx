import React, { useState } from 'react';
import { Avatar } from '../../atoms/avatar';
import { AvatarBadge } from '../../atoms/avatarBadge';
import styles from './avatarDropDown.module.css';
import { Icon } from '../../atoms/icon';
import { arrowSize, badgeSize } from './const';
import { AvatarDropDownProps } from './types';

export function AvatarDropDown({
  src,
  avatarTitle,
  size = 'md',
  children,
  badgeColor,
  color = '#fff',
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
          <Avatar size={size} src={src} title={avatarTitle}>
            <AvatarBadge
              color={badgeColor ?? undefined}
              size={badgeSize(size)}
            />
          </Avatar>
          <Icon
            ariaLabel="arrow"
            icon="AngleDown"
            size={arrowSize[size]}
            color={color}
          />
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
