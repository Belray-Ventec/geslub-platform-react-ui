import React from 'react';
import { InputElementProps } from './type';
import styles from './inputelement.module.css';
import { sizes } from './const';

export function InputElement({ children, size = 'md' }: InputElementProps) {
  return (
    <div className={[styles.input_element, sizes[size]].join(' ')}>
      {children}
    </div>
  );
}
