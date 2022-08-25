import React from 'react';
import styles from './tag.module.css';

interface TagProps {
  children: React.ReactNode;
  backgroundColor? : string
  color? : string
  rounded?: boolean;
  onClick: (text: string) => void;
}

export function Tag({ children, onClick, backgroundColor, color, rounded }: TagProps): JSX.Element {
  return (
    <span className={[styles.tag, rounded && styles.tag_rounded].join(' ')} 
    style={{backgroundColor: backgroundColor && backgroundColor, color: color && color}} onClick={(): void => onClick(String(children))}>
      {children}
    </span>
  );
}
