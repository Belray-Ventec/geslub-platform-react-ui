import React from 'react';

interface Props {
  size?: number;
  color?: string;
}

function Oem({ size = 30, color = '#fff' }: Props) {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path
        fill={color}
        d="M88.7 223.8L0 375.8V96c0-35.3 28.7-64 64-64h117.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1c5.8-9.9 16.3-15.9 27.7-15.9h400c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2.1-32.1l112-192z"
      ></path>
    </svg>
  );
}

export default Oem;
