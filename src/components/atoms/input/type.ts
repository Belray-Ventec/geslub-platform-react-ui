import { HTMLAttributes } from 'react';
export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  themeColor?: string;
  variant?: Variant;
  size?: Size;
}

export type Size = 'xs' | 'sm' | 'md' | 'lg';
export type Variant = 'outline' | 'filled' | 'flushed' | 'unstyled';
