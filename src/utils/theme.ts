import type { ComponentStyleConfig } from '@chakra-ui/theme';
import { extendTheme } from '@chakra-ui/react';

const Button: ComponentStyleConfig = {
  variants: {
    primary: {
      bg: 'primary',
      color: 'onPrimary',
    },
    secondary: {
      bg: 'secondary',
      color: 'onSecondary',
    },
    danger: {
      bg: 'danger',
      color: 'onDanger',
    },
  },
};

export const geslubTheme = extendTheme({
  colors: {
    primary: '#173C5E',
    onPrimary: '#FFFFFF',
    secondary: '#D82F11',
    onSecondary: '#FFFFFF',
    background: '#f8f8f8',
    danger: '#E53E3E',
    onDanger: '#FFFFFF',
    layout: '#FFFFFF',
  },
  components: {
    Button,
  },
});
