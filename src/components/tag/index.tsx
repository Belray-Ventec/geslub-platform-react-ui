import React from 'react';
import styles from './tag.module.css';

interface TagProps {
  text: string;
  backgroundColor? : string
  color? : string
  rounded?: boolean;
  onClick: (text: string) => void;
}

export default function Tag({ text, onClick, backgroundColor, color, rounded }: TagProps): JSX.Element {
  return (
    <span className={[styles.tag, rounded && styles.tag_rounded].join(' ')} 
    style={{backgroundColor: backgroundColor && backgroundColor, color: color && color}} onClick={(): void => onClick(text)}>
      {text}
    </span>
  );
}
