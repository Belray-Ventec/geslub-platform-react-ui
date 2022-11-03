import React, { ButtonHTMLAttributes } from 'react';
import { Loading } from '../../../assets/icons/Loading';
import styles from './button.module.css';

export enum Size {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ariaLabel?: string;
  backgroundColor?: string;
  color?: string;
  size?: Size;
  primary?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  loadingText?: string;
}

export function Button({
  ariaLabel,
  backgroundColor,
  size = Size.medium,
  primary = false,
  rounded = false,
  disabled = false,
  color,
  fullWidth = false,
  children,
  className,
  style,
  leftIcon,
  isLoading,
  loadingText,
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
      aria-label={ariaLabel ? ariaLabel : undefined}
      disabled={disabled}
      type="button"
      className={[
        styles.button,
        buttonSize,
        valuePrimary,
        fullWidth ? styles.fullWidth : undefined,
        className,
      ].join(' ')}
      style={{
        backgroundColor: backgroundColor,
        borderRadius: valueRounded,
        color: color ? color : undefined,
        ...style,
      }}
      {...props}
    >
      {isLoading ? (
        <>
          <Loading size={15} color={primary ? '#fff' : '#34495D'} />
          {loadingText}
        </>
      ) : (
        <>
          {leftIcon && leftIcon}
          {children}
        </>
      )}
    </button>
  );
}
