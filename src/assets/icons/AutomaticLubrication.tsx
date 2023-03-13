import React from 'react';

interface Props {
  size?: number;
  color?: string;
}

function AutomaticLubrication({ size = 30, color = '#000' }: Props) {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 512"
    >
      <path
        fill={color}
        d="M64 0C50.7 0 40 10.7 40 24s10.7 24 24 24c4.4 0 8 3.6 8 8v64.9c0 12.2-7.2 23.1-17.2 30.1C21.7 174.1 0 212.5 0 256v192c0 35.3 28.7 64 64 64h128c35.3 0 64-28.7 64-64V256c0-43.5-21.7-81.9-54.8-105-10-7-17.2-17.9-17.2-30.1V56c0-4.4 3.6-8 8-8 13.3 0 24-10.7 24-24S205.3 0 192 0H64zm64 382c-26.5 0-48-20.1-48-45 0-16.8 22.1-48.1 36.3-66.4 6-7.8 17.5-7.8 23.5 0 14.1 18.3 36.2 49.6 36.2 66.4 0 24.9-21.5 45-48 45z"
      ></path>
    </svg>
  );
}

export default AutomaticLubrication;
