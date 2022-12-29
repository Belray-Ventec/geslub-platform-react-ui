import React from 'react';

interface Props {
  size?: number;
  color?: string;
}

function Rss({ size = 30, color = '#fff' }: Props) {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        fill={color}
        d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm32 104c0-13.3 10.7-24 24-24 137 0 248 111 248 248 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-110.5-89.5-200-200-200-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24 83.9 0 152 68.1 152 152 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-57.4-46.6-104-104-104-13.3 0-24-10.7-24-24zm64 120c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32z"
      ></path>
    </svg>
  );
}

export default Rss;
