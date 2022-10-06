import React, { useState } from 'react';
import { Avatar } from '../../atoms/avatar';
import { AvatarProps } from '../../atoms/avatar/types';
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

  const badgeSize = () => {
    switch (size) {
      case '2xs':
        return '0.3rem';
      case 'xs':
        return '0.5rem';
      case 'sm':
        return '0.7rem';
      case 'md':
        return '0.9rem';
      case 'lg':
        return '1.1rem';
      case 'xl':
        return '1.3rem';
      case '2xl':
        return '1.5rem';
      default:
        return '0.9rem';
    }
  };

  const arrowSize = () => {
    switch (size) {
      case '2xs':
        return 8;
      case 'xs':
        return 11;
      case 'sm':
        return 14;
      case 'md':
        return 17;
      case 'lg':
        return 20;
      case 'xl':
        return 23;
      case '2xl':
        return 26;
      default:
        return 29;
    }
  };
  return (
    <>
      <div className={styles.showOptionsContainer}>
        <div className={styles.container}>
          <Avatar size={size} src={src} title={avatarTitle}>
            <AvatarBadge color={badgeColor ?? undefined} size={badgeSize()} />
          </Avatar>
          <Icon
            ariaLabel="arrow"
            onClick={() => handleShowOptions()}
            icon="AngleDown"
            size={arrowSize()}
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
