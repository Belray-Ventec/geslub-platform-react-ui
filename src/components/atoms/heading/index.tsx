import React from 'react';
import styles from './heading.module.css';
import PropTypes from 'prop-types';
import { fontSize } from './const';
import { HeadingProps } from './types';

export function Heading({
  children,
  isBold,
  isItalic,
  size = 'xl',
  isNoWrap,
  color,
  className,
  style,
  as = 'h1',
  ...props
}: HeadingProps) {
  const HeadingTag: keyof JSX.IntrinsicElements = as;

  return (
    <HeadingTag
      {...props}
      className={[
        styles.h1,
        isItalic ? styles.h1_italic : undefined,
        isBold ? styles.h1_bold : undefined,
        fontSize[size],
        className,
        isNoWrap ? styles.nowrap : undefined,
      ].join(' ')}
      style={{ color, ...style }}
    >
      {children}
    </HeadingTag>
  );
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  isBold: PropTypes.bool,
  isItalic: PropTypes.bool,
  size: PropTypes.oneOf(['xl', 'lg', 'md', 'sm', 'xs', '2xs', '3xs', '4xs']),
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  className: PropTypes.string,
  style: PropTypes.object,
};

Heading.defaultProps = {
  size: 'xl',
};
