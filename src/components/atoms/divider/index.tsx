import React from 'react';
import styles from './divider.module.css';

interface DividerProps {
  vertical?: boolean;
  height?: number;
}

export function Divider({ vertical, height = 200 }: DividerProps) {
  return (
    <div
      style={vertical ? { height: `${height}px` } : undefined}
      className={[vertical ? styles.vertical : styles.divider].join(' ')}
    ></div>
  );
}
