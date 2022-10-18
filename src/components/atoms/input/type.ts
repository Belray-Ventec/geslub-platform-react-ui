import { InputHTMLAttributes } from 'react';
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  themeColor?: string;
  variant?: Variant;
  size?: Size;
}

export type Size = 'xs' | 'sm' | 'md' | 'lg';
export type Variant = 'outline' | 'filled' | 'flushed' | 'unstyled';
