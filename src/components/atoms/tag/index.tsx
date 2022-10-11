import React from 'react';
import styles from './tag.module.css';
import { TagProps } from './types';

export function Tag({
  children,
  onClick,
  backgroundColor,
  color,
  rounded,
}: TagProps): JSX.Element {
  return (
    <span
      className={[styles.tag, rounded ? styles.tag_rounded : undefined].join(
        ' '
      )}
      style={{
        backgroundColor: backgroundColor && backgroundColor,
        color: color ?? undefined,
      }}
      onClick={(): void => onClick && onClick(String(children))}
    >
      {children}
    </span>
  );
}
