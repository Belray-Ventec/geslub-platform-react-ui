import React from 'react';

interface IconProps {
  fill?: string;
  size?: number;
}

export default function SortUp({ fill = '9a9a9a', size = 30 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
    >
      <path
        fill={fill}
        d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224z"
      />
    </svg>
  );
}
