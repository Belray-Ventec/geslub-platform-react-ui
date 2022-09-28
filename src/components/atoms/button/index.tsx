import React from 'react';
import styles from './button.module.css';

export enum Size {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

interface ButtonProps {
  ariaLabel?: string;
  backgroundColor?: string;
  variant?: 'icon' | 'text';
  color?: string;
  size?: Size;
  primary?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export function Button({
  ariaLabel,
  backgroundColor,
  size = Size.medium,
  primary = false,
  rounded = false,
  disabled = false,
  onClick,
  color,
  children,
  ...props
}: ButtonProps): JSX.Element {
  const valuePrimary = primary
    ? `${styles.button_primary}`
    : `${styles.button_secondary}`;
  const valueRounded = rounded ? '3rem' : undefined;

  const buttonSize =
    size === Size.small
      ? styles.button_small
      : size === Size.medium
      ? styles.button_medium
      : styles.button_large;

  return (
    <button
      aria-label={ariaLabel ? ariaLabel : 'button'}
      disabled={disabled}
      onClick={onClick}
      type="button"
      className={[styles.button, buttonSize, valuePrimary].join(' ')}
      style={{
        backgroundColor: backgroundColor,
        borderRadius: valueRounded,
        color: color ? color : undefined,
      }}
      {...props}
    >
      {children}
    </button>
  );
}
