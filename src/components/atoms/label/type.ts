import { LabelHTMLAttributes, ReactNode } from 'react';
import { Size } from '../input/type';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  size?: Size;
  children: ReactNode;
}
