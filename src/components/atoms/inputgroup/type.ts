import { HTMLAttributes, ReactNode } from 'react';
import { Size } from '../input/type';
export interface InputGroupProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: Size;
  isError?: boolean;
  isRequired?: boolean;
}
