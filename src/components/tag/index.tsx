import React from 'react';
import './tag.css';

interface TagProps {
  text: string;
  onClick: (text: string) => void;
}

export default function Tag({ text, onClick }: TagProps): JSX.Element {
  return (
    <span className="tag" onClick={(): void => onClick(text)}>
      {text}
    </span>
  );
}
