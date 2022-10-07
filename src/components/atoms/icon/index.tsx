import React from 'react';
import styles from './icon.module.css';
import { iconList } from './const';
import { IconProps } from './types';

export function Icon({
  icon,
  color = '#000',
  size = 25,
  onClick,
  ariaLabel,
  role,
  src,
}: IconProps) {
  return (
    <i
      role={role ?? undefined}
      className={onClick && styles.icon_click}
      aria-label={ariaLabel ?? undefined}
      onClick={() => onClick && onClick()}
    >
      {iconList(size, color, src)[icon || 'Image']}
    </i>
  );
}
