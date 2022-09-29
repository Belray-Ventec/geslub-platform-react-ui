import React from 'react';
import styles from './h1.module.css';
import PropTypes from 'prop-types';

interface H1Props {
  children: React.ReactNode;
  color?: string;
  isBold?: boolean;
  isItalic?: boolean;
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  className?: string;
  style?: React.CSSProperties;
}

export function H1({
  children,
  isBold,
  isItalic,
  size,
  color,
  className,
  style,
  ...props
}: H1Props) {
  const fontSize = () => {
    switch (size) {
      case 'h5':
        return styles.h5_size;
      case 'h4':
        return styles.h4_size;
      case 'h3':
        return styles.h3_size;
      case 'h2':
        return styles.h2_size;
      default:
        return undefined;
    }
  };

  return (
    <h1
      {...props}
      className={[
        styles.h1,
        isItalic ? styles.h1_italic : undefined,
        isBold ? styles.h1_bold : undefined,
        fontSize(),
        className,
      ].join(' ')}
      style={{ color, ...style }}
    >
      {children}
    </h1>
  );
}

H1.prototype = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  isBold: PropTypes.bool,
  isItalic: PropTypes.bool,
  size: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']).isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

H1.defaultProps = {
  size: 'h1',
};
