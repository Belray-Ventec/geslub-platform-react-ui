import { ReactNode, HTMLAttributes } from 'react';
import { Size } from '../input/type';
export interface InputElementProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: Size;
}
