import { InputHTMLAttributes } from 'react';
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  themeColor?: string;
  variant?: Variant;
  size?: Size;
  htmlSize?: number;
}

export interface InputPropsWithLabel
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  themeColor?: string;
  variant?: Variant;
  size?: Size;
  label: string;
  htmlSize?: number;
  htmlFor?: string;
}

export type Size = 'xs' | 'sm' | 'md' | 'lg';
export type Variant = 'outline' | 'filled' | 'flushed' | 'unstyled';
