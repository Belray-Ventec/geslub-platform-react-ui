import React from 'react'
import './Button.css'


export enum Size {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

interface ButtonProps {
  backgroundColor?: string;
  variant?: 'icon' | 'text';
  size?: Size;
  primary?: boolean;
  text: string | JSX.Element;
  rounded?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}


export function Button ({
  backgroundColor,
  size = Size.medium,
  primary = false,
  text='Default Text',
  rounded=false,
  disabled=false,
  onClick,
  variant = 'text',
  ...props

}: ButtonProps): JSX.Element{
  const valuePrimary = primary ? 'button-belray--primary' : 'button-belray--secondary'
  const valueRounded = rounded ? '3rem' : '';
  const isText = variant === 'text' ? `button-belray--${size}` : '';
  return (
    <button 
      disabled={disabled}
      onClick={onClick}
      type='button' 
      className={['button-belray', isText, valuePrimary].join(' ')} 
      style={{ backgroundColor: backgroundColor, borderRadius: valueRounded }} 
      {...props}>{ text }</button>
  )
}
