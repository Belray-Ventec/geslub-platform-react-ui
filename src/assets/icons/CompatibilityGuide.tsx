import React from 'react';

interface Props {
  size?: number;
  color?: string;
}

function CompatibilityGuide({ size = 30, color = '#000' }: Props) {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
    >
      <path
        fill={color}
        d="M280 64h40c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h49.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64h9.6zM64 112c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16h-16v24c0 13.3-10.7 24-24 24H104c-13.3 0-24-10.7-24-24v-24H64zm128-8a24 24 0 100-48 24 24 0 100 48z"
      ></path>
    </svg>
  );
}

export default CompatibilityGuide;
