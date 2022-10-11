import React from 'react';
import { Heading } from '../../atoms/heading';
import styles from './header.module.css';
import PropTypes from 'prop-types';
import { HeaderProps } from './types';

export function Header({ title, children, titleSize, ...props }: HeaderProps) {
  return (
    <div {...props} className={styles.header_container}>
      <div className={styles.header_content}>
        <div className={styles.header_title}>
          <Heading as={'h1'} size={titleSize}>
            {title}
          </Heading>
        </div>
        <div className={styles.header_right}>{children}</div>
      </div>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  titleSize: PropTypes.oneOf([
    'xl',
    'lg',
    'md',
    'sm',
    'xs',
    '2xs',
    '3xs',
    '4xs',
  ]),
};

Header.defaultProps = {
  titleSize: '3xs',
};
