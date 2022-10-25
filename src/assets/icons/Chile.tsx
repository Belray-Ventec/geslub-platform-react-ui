import React from 'react';

interface CheckProps {
  size?: number;
  color?: string;
}

export function Chile({ size = 20, color = '#fff' }: CheckProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      width={size}
      height={size}
      version="1"
      viewBox="0 0 1063 708.66"
    >
      <path
        fill="#fdfdfd"
        fillOpacity="0.996"
        fillRule="evenodd"
        strokeWidth="1pt"
        d="M354.31 -0.001H1062.99V354.339H354.31z"
      ></path>
      <path
        fill="#5651a9"
        fillOpacity="0.996"
        fillRule="evenodd"
        strokeWidth="1pt"
        d="M0 -0.001H354.34V354.339H0z"
      ></path>
      <path
        fill="#fdfdfd"
        fillOpacity="0.996"
        fillRule="evenodd"
        strokeWidth="0.113"
        d="M266.19 534.45l-10.41-7.43-10.36 7.5 3.85-12.19-10.33-7.53 12.78-.11 3.97-12.16 4.05 12.13 12.79.02-10.28 7.6 3.94 12.17z"
        transform="matrix(5.2732 0 0 5.5381 -1171.4 -2694.5)"
      ></path>
      <path
        fill="#ed2800"
        fillOpacity="0.996"
        fillRule="evenodd"
        strokeWidth="1pt"
        d="M0 354.34H1063V708.66H0z"
      ></path>
    </svg>
  );
}
