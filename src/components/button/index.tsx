import React from 'react';
import styles from './button.module.css';

export enum Size {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

interface ButtonProps {
  backgroundColor?: string;
  variant?: 'icon' | 'text';
  size?: Size;
  primary?: boolean;
  text: string | JSX.Element;
  rounded?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({
  backgroundColor,
  size = Size.medium,
  primary = false,
  text = 'Default Text',
  rounded = false,
  disabled = false,
  onClick,
  variant = 'text',
  ...props
}: ButtonProps): JSX.Element {
  const valuePrimary = primary
    ? `${styles.button_primary}`
    : `${styles.button_secondary}`;
  const valueRounded = rounded ? '3rem' : '';

  const buttonSize =
    size === Size.small
      ? styles.button_small
      : size === Size.medium
        ? styles.button_medium
        : styles.button_large;

  const isText = variant === 'text' ? buttonSize : '';
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type="button"
      className={[styles.button, isText, valuePrimary].join(' ')}
      style={{ backgroundColor: backgroundColor, borderRadius: valueRounded }}
      {...props}
    >
      {text}
    </button>
  );
}
