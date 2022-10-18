import React from 'react';
import { sizes } from '../atoms/inputelement/const';
import { inputAddonPositionStyle } from './const';
import styles from './inputaddon.module.css';
import { InputAddonProps } from '../atoms/inputaddon/type';

export function InputAddon({
  children,
  size = 'md',
  position = 'left',
  color,
  ...props
}: InputAddonProps) {
  return (
    <div
      style={{ color: color ? color : 'var(--colors-gray-500)' }}
      {...props}
      id="inputaddon"
      className={[
        styles.inputaddon,
        sizes[size],
        inputAddonPositionStyle[position],
      ].join(' ')}
    >
      {children}
    </div>
  );
}
