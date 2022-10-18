import React from 'react';
import { InputElementProps } from './type';
import styles from './inputelement.module.css';
import { sizes } from './const';

export function InputElement({
  children,
  size = 'md',
  className,
  ...props
}: InputElementProps) {
  return (
    <div
      {...props}
      className={[styles.input_element, sizes[size], className].join(' ')}
    >
      {children}
    </div>
  );
}
