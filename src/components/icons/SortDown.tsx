import React from 'react'

interface IconProps {
    fill?: string;
    size?: number;
  }

export default function SortDown({
    fill = '9a9a9a',
    size = 30,
  }: IconProps) {
  return (
    <svg 
    width={size}
    height={size} 
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill={fill} d="M311.9 335.1l-132.4 136.8C174.1 477.3 167.1 480 160 480c-7.055 0-14.12-2.702-19.47-8.109l-132.4-136.8C-9.229 317.8 3.055 288 27.66 288h264.7C316.9 288 329.2 317.8 311.9 335.1z"/></svg>
  )
}
