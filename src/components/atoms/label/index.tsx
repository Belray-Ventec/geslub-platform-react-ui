import React from 'react';
import { fontSizes } from './const';
import { LabelProps } from './type';
import styles from './label.module.css';

export function Label({ size = 'md', children, ...props }: LabelProps) {
  return (
    <label {...props} className={[styles.label, fontSizes[size]].join(' ')}>
      {children}
    </label>
  );
}
