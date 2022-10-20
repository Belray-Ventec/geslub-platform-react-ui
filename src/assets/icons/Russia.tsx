import React from 'react';

interface RusiaProps {
  size?: number;
  color?: string;
}

export function Rusia({ size = 30 }: RusiaProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 496 496"
      version="1.1"
      viewBox="0 0 496 496"
      xmlSpace="preserve"
      width={size}
      height={size}
    >
      <path
        fill="#E73B36"
        d="M0 304v65.6C0 396.8 21.6 416 48 416h400c26.4 0 48-19.2 48-46.4V304H0z"
      ></path>
      <path
        fill="#F0F7F6"
        d="M448 80H48C21.6 80 0 99.2 0 126.4V192h496v-65.6c0-27.2-21.6-46.4-48-46.4z"
      ></path>
      <path fill="#3757A6" d="M0 192H496V304H0z"></path>
      <path
        fill="#D31C1C"
        d="M446.4 416c26.4 0 49.6-19.2 49.6-46.4V304H315.2l131.2 112z"
      ></path>
      <path
        fill="#DFF2EF"
        d="M448 80H48l132.8 112H496v-65.6c0-27.2-21.6-46.4-48-46.4z"
      ></path>
      <path fill="#20448E" d="M316 304L496 304 496 192 180 192z"></path>
      <path
        fill="#CAEAE4"
        d="M448 80H48l370.4 112H496v-65.6c0-27.2-21.6-46.4-48-46.4z"
      ></path>
      <path fill="#103577" d="M496 214.4L496 192 414.4 192z"></path>
      <path
        fill="#C41010"
        d="M496 368.8c0 29.6-21.6 47.2-48 47.2H48c-26.4 0-48-20.8-48-48"
      ></path>
    </svg>
  );
}
