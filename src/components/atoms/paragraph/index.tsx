import React from 'react';
import styles from './paragraph.module.css';
import PropTypes from 'prop-types';
import { fontSize, textAlign } from './const';
import { ParagraphProps } from './types';

export function Paragraph({
  as = 'p',
  size = 'default',
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

  return (
    <ParagraphTag
      style={{ color, ...style }}
      className={[
        className,
        styles.paragraph,
        fontSize[size],
        isBold ? styles.fontWeightBold : undefined,
        isItalic ? styles.isItalic : undefined,
        isStriked ? styles.isStriked : undefined,
        textAlign[align],
      ].join(' ')}
    >
      {children}
    </ParagraphTag>
  );
}

Paragraph.propTypes = {
  as: PropTypes.oneOf(['p', 'span', 'div']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'default']),
  color: PropTypes.string,
  isBold: PropTypes.bool,
  isItalic: PropTypes.bool,
  isStriked: PropTypes.bool,
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};
