import React, { useEffect, useState } from 'react';
import styles from './avatar.module.css';
import PropTypes from 'prop-types';
import { AvatarProps, Size } from './types';
import { firstLetters, sizes } from './const';

export function Avatar({ title, src, size, children }: AvatarProps) {
  const [isError, setisError] = useState(false);

  useEffect(() => {
    setisError(false);
  }, [src]);

  return (
    <div className={styles.avatar_container}>
      {!isError ? (
        <img
          alt={title}
          title={title}
          className={[styles.avatar, sizes[size as Size]].join(' ')}
          src={src}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            setisError(true);
          }}
        />
      ) : (
        <div
          role={'img'}
          className={[styles.avatar_container, sizes[size as Size]].join(' ')}
        >
          {firstLetters(title)}
        </div>
      )}
      {children}
    </div>
  );
}

Avatar.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string,
  size: PropTypes.oneOf(['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl']),
  children: PropTypes.node,
};

Avatar.defaultProps = {
  src: '',
};
