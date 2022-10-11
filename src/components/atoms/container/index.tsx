import React from 'react';
import { ContainerProps } from './types';
import styles from './container.module.css';

export function Container({ children, ...props }: ContainerProps) {
  return (
    <div {...props} className={[styles.container].join(' ')}>
      {children}
    </div>
  );
}
