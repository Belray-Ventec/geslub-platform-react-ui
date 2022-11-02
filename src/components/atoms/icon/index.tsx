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
  className,
}: IconProps) {
  return (
    <i
      style={{ width: size, height: size }}
      role={role ?? undefined}
      className={[onClick && styles.icon_click, className].join(' ')}
      aria-label={ariaLabel ?? undefined}
      onClick={(e) => {
        onClick && onClick();
        onClick && e.stopPropagation();
      }}
    >
      {iconList(size, color, src)[icon || 'Image']}
      <span className={styles.visually_hidden}>{ariaLabel}</span>
    </i>
  );
}
