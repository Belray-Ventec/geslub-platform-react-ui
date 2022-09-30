import React from 'react';
import styles from './heading.module.css';
import PropTypes from 'prop-types';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: string;
  isBold?: boolean;
  isItalic?: boolean;
  isNoWrap?: boolean;
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs' | '2xs' | '3xs' | '4xs';
  className?: string;
  style?: React.CSSProperties;
}

export function Heading({
  children,
  isBold,
  isItalic,
  size,
  isNoWrap,
  color,
  className,
  style,
  as,
  ...props
}: HeadingProps) {
  const fontSize = () => {
    switch (size) {
      case '4xs':
        return styles.small;
      case '3xs':
        return styles.paragraph;
      case '2xs':
        return styles.h6_size;
      case 'xs':
        return styles.h5_size;
      case 'sm':
        return styles.h4_size;
      case 'md':
        return styles.h3_size;
      case 'lg':
        return styles.h2_size;
      default:
        return undefined;
    }
  };

  const HeadingTag: keyof JSX.IntrinsicElements = as;

  return (
    <HeadingTag
      {...props}
      className={[
        styles.h1,
        isItalic ? styles.h1_italic : undefined,
        isBold ? styles.h1_bold : undefined,
        fontSize(),
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
  className: PropTypes.string,
  style: PropTypes.object,
};

Heading.defaultProps = {
  size: 'md',
};
