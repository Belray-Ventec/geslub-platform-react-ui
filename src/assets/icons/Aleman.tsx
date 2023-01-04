import React from 'react';

interface Props {
  size?: number;
}

function Aleman({ size = 24 }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 5 3"
    >
      <path fill="#000" d="M0 0H5V3H0z"></path>
      <path fill="#D00" d="M0 1H5V3H0z"></path>
      <path fill="#FFCE00" d="M0 2H5V3H0z"></path>
    </svg>
  );
}

export default Aleman;
