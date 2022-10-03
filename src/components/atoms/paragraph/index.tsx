import React from 'react';
import styles from './paragraph.module.css';
import PropTypes from 'prop-types';

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  as?: 'p' | 'span' | 'div';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: string;
  isBold?: boolean;
  isItalic?: boolean;
  isStriked?: boolean;
  align?: 'left' | 'center' | 'right' | 'justify';
  className?: string;
  style?: React.CSSProperties;
}

export function Paragraph({
  as = 'p',
  size,
  color,
  isBold,
  isItalic,
  isStriked,
  align = 'center',
  className,
  style,
  children,
}: ParagraphProps) {
  const ParagraphTag: keyof JSX.IntrinsicElements = as;

  const fontSize = () => {
    switch (size) {
      case 'xs':
        return styles.paragraph_xs;
      case 'sm':
        return styles.paragraph_sm;
      case 'md':
        return styles.paragraph_md;
      case 'lg':
        return styles.paragraph_lg;
      default:
        return undefined;
    }
  };

  const textAlign = () => {
    switch (align) {
      case 'left':
        return styles.align_left;
      case 'center':
        return styles.align_center;
      case 'right':
        return styles.align_right;
      case 'justify':
        return styles.align_justify;
      default:
        return styles.align_center;
    }
  };

  return (
    <ParagraphTag
      style={{ color, ...style }}
      className={[
        className,
        styles.paragraph,
        fontSize(),
        isBold ? styles.fontWeightBold : undefined,
        isItalic ? styles.isItalic : undefined,
        isStriked ? styles.isStriked : undefined,
        textAlign(),
      ].join(' ')}
    >
      {children}
    </ParagraphTag>
  );
}

Paragraph.propTypes = {
  as: PropTypes.oneOf(['p', 'span', 'div']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  color: PropTypes.string,
  isBold: PropTypes.bool,
  isItalic: PropTypes.bool,
  isStriked: PropTypes.bool,
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};
