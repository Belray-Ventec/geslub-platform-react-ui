import React, { useEffect, useState } from 'react';
import styles from './avatar.module.css';
import PropTypes from 'prop-types';

export type Size = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface AvatarProps {
  title?: string;
  src?: string;
  size?: Size;
  children?: React.ReactNode;
}

export function Avatar({ title, src, size, children }: AvatarProps) {
  const [isError, setisError] = useState(false);

  const firstLetters = () => {
    if (title) {
      const listOfWords = title.toUpperCase().split(' ');
      const listOfFirstLetters = listOfWords.map((word) => word[0]);

      return listOfFirstLetters.length >= 2
        ? `${listOfFirstLetters[0]}${listOfFirstLetters[1]}`
        : listOfFirstLetters[0];
    }
    return 'A';
  };

  const avatarSize = () => {
    switch (size) {
      case '2xs':
        return styles.avatar_2xs;
      case 'xs':
        return styles.avatar_xs;
      case 'sm':
        return styles.avatar_sm;
      case 'md':
        return styles.avatar_md;
      case 'lg':
        return styles.avatar_lg;
      case 'xl':
        return styles.avatar_xl;
      case '2xl':
        return styles.avatar_2xl;
      default:
        return styles.avatar_md;
    }
  };

  useEffect(() => {
    setisError(false);
  }, [src]);

  return (
    <div className={styles.avatar_container}>
      {!isError ? (
        <img
          alt={title}
          title={title}
          className={[styles.avatar, avatarSize()].join(' ')}
          src={src}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            setisError(true);
          }}
        />
      ) : (
        <div
          role={'img'}
          className={[styles.avatar_container, avatarSize()].join(' ')}
        >
          {firstLetters()}
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
