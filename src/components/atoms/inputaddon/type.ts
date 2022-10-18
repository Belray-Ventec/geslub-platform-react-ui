import { HTMLAttributes, ReactNode } from 'react';
import { Size } from '../input/type';

export interface InputAddonProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: Size;
  position: Position;
  color?: string;
}

type Position = 'left' | 'right';
