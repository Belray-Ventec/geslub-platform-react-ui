import React, {ReactNode, useState} from 'react';
import './dropDown.css';
import { Button } from '../Button';


interface DropDownProps {
    title: string | JSX.Element;
    children: ReactNode;
    themeColor: string;
    onlyResponsive?: boolean;
}

export default function DropDown({title, children, onlyResponsive, themeColor}: DropDownProps): JSX.Element {

  const [show, setShow] = useState(false)

  if (!onlyResponsive) {
    return (
      <div onClick={(): void => setShow(!show)} className='belDropDown'>
          <span>{title}</span>
          <div className={!show ? 'belDropDown-content' : 'belDropDown-content-hover'}>
                {children}
          </div>
      </div>
    )
  }

  return (
    <div className='belDropDownContainer'>
        <div onClick={(): void => setShow(!show)} className='belDropDownResponsive'>
          <Button backgroundColor={themeColor ? themeColor : '#34495e'} primary text={title}></Button>
        </div>
        <div className={!show ? 'belDropDown-content' : 'belDropDown-content-hover'}>
                {children}
          </div>
    </div>

  )
}
