import React from 'react';

interface Props {
  size?: number;
  color?: string;
}

function Webinars({ size = 30, color = '#fff' }: Props) {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill={color}
        d="M448 32h-86.1l-1 1-127 127H326l1-1L453.8 32.3c-1.9-.2-3.8-.3-5.8-.3zm64 128V96c0-15.1-5.3-29.1-14-40L394 160h118zM294.1 32h-92.2l-1 1-127 127H166l1-1L294 32zM64 32C28.7 32 0 60.7 0 96v64h6.1l1-1 127-127H64zm448 160H0v224c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V192z"
      ></path>
    </svg>
  );
}

export default Webinars;
