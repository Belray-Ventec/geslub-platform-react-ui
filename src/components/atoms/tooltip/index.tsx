import React from 'react';
import './tooltip.css';

export default function Tooltip({
  children,
  position,
  text,
}: {
  children: React.ReactNode;
  position:
    | 'up'
    | 'down'
    | 'left'
    | 'right'
    | 'up-left'
    | 'up-right'
    | 'down-left'
    | 'down-right';
  text: string;
}) {
  return (
    <>
      <span data-tts={position} aria-label={text}>
        {children}
      </span>
    </>
  );
}
