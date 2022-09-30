import React, { useState } from 'react';
import { Avatar, AvatarProps } from '../../atoms/avatar';
import { AvatarBadge } from '../../atoms/avatarBadge';
import styles from './avatarDropDown.module.css';
import { Icon } from '../../atoms/icon';

interface AvatarDropDownProps extends AvatarProps {
  children?: React.ReactNode;
  avatarTitle?: string;
  badgeColor?: string;
  right?: boolean;
  color?: string;
}

export function AvatarDropDown({
  src,
  avatarTitle,
  size,
  children,
  badgeColor,
  color = '#fff',
  right,
}: AvatarDropDownProps) {
  const [showOptions, setShowOptions] = useState(false);

  const handleShowOptions = () => setShowOptions(!showOptions);

  return (
    <>
      <div className={styles.showOptionsContainer}>
        <div className={styles.container}>
          <Avatar size={size} src={src} title={avatarTitle}>
            <AvatarBadge
              color={badgeColor ? badgeColor : undefined}
              size="0.9rem"
            />
          </Avatar>
          <Icon
            onClick={() => handleShowOptions()}
            icon="AngleDown"
            size={20}
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
