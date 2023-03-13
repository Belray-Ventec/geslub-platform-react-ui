import React from 'react';

interface Props {
  size?: number;
  color?: string;
}

function Guide({ size = 30, color = '#000' }: Props) {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
    >
      <path
        fill={color}
        d="M14 2.2c8.5-3.9 18.5-2.5 25.6 3.6L80 40.4l40.4-34.6c9-7.7 22.3-7.7 31.2 0L192 40.4l40.4-34.6c9-7.7 22.2-7.7 31.2 0L304 40.4l40.4-34.6c7.1-6.1 17.1-7.5 25.6-3.6s14 12.4 14 21.8v464c0 9.4-5.5 17.9-14 21.8s-18.5 2.5-25.6-3.6L304 471.6l-40.4 34.6c-9 7.7-22.2 7.7-31.2 0L192 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L80 471.6l-40.4 34.6c-7.1 6.1-17.1 7.5-25.6 3.6S0 497.4 0 488V24C0 14.6 5.5 6.1 14 2.2zM96 144c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16-7.2 16-16s-7.2-16-16-16H96zM80 352c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16s-7.2-16-16-16H96c-8.8 0-16 7.2-16 16zm16-112c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16-7.2 16-16s-7.2-16-16-16H96z"
      ></path>
    </svg>
  );
}

export default Guide;
