import React from 'react'

interface AngleDownProps {
    size?: number;
    color?: string;
}

export default function AngleDown({ size = 40, color = '#000' }: AngleDownProps) {
  return (
    <svg  width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill={color} d="M224 397.3l22.6-22.6 160-160L429.3 192 384 146.7l-22.6 22.6L224 306.7 86.6 169.4 64 146.7 18.7 192l22.6 22.6 160 160L224 397.3z"/></svg>
  )
}
