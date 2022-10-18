import React from 'react';
import { Label } from '../label';
import { sizes, variantStyle } from './const';
import styles from './input.module.css';
import { InputProps, InputPropsWithLabel } from './type';

export function Input({
  themeColor,
  variant = 'outline',
  size = 'md',
  htmlSize,
  ...props
}: InputProps) {
  return (
    <input
      className={[styles.input, sizes[size], variantStyle[variant]].join(' ')}
      {...props}
    />
  );
}

export function InputWithLabel({
  themeColor,
  variant = 'outline',
  size = 'md',
  id,
  label,
  htmlSize,
  ...props
}: InputPropsWithLabel) {
  return (
    <>
      <Label htmlFor={id} size={size}>
        {label}
      </Label>
      <Input
        variant={variant}
        id={id}
        htmlSize={htmlSize}
        size={size}
        {...props}
      />
    </>
  );
}
