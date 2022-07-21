import React from 'react';
import * as styles from './tag.module.css';

interface TagProps {
  text: string;
  onClick: (text: string) => void;
}

export default function Tag({ text, onClick }: TagProps): JSX.Element {
  return (
    <span className={styles.tag} onClick={(): void => onClick(text)}>
      {text}
    </span>
  );
}
