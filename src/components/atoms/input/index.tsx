import React from 'react';
import { sizes, variantStyle } from './const';
import styles from './input.module.css';
import { InputProps } from './type';

export function Input({
  themeColor,
  variant = 'outline',
  size = 'md',
  ...props
}: InputProps) {
  return (
    <input
      className={[styles.input, sizes[size], variantStyle[variant]].join(' ')}
      {...props}
    />
  );
}
