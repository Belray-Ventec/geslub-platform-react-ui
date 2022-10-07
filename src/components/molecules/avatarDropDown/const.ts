import { Size } from '../../atoms/avatar/types';

export const badgeSize = (size: string) => {
  const sizes = {
    '2xs': '0.3rem',
    xs: '0.5rem',
    sm: '0.7rem',
    md: '0.9rem',
    lg: '1.1rem',
    xl: '1.3rem',
    '2xl': '1.5rem',
  };
  return sizes[size as Size];
};

export const arrowSize = {
  '2xs': 8,
  xs: 11,
  sm: 14,
  md: 17,
  lg: 20,
  xl: 23,
  '2xl': 26,
};
