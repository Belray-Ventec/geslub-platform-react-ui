import React from 'react';
import styles from './avatarBadge.module.css';
import PropTypes from 'prop-types';

export interface AvatarBadgeProps {
  color?: string;
  borderColor?: string;
  children?: React.ReactNode;
  size: string;
}

export function AvatarBadge({
  borderColor,
  color,
  size,
  children,
}: AvatarBadgeProps) {
  return (
    <div
      style={{
        width: size ?? undefined,
        height: size ?? undefined,
        backgroundColor: color ?? undefined,
        borderColor: borderColor ?? undefined,
      }}
      className={styles.avatarBadge}
    >
      {children}
    </div>
  );
}

AvatarBadge.propTypes = {
  color: PropTypes.string,
  borderColor: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.string.isRequired,
};
