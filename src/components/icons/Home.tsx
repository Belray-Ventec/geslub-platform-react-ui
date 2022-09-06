import React from 'react'
import homeImage from  '../../assets/drawer/home.png'

interface HomeProps {
    size?: number;
}

export default function Home({size = 40}: HomeProps) {
  return (
    <img width={`${size}`} height={`${size}`} src={homeImage} />
  )
}
