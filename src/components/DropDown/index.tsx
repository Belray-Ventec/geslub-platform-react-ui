import React, {useState} from 'react';
import './dropDown.css';
import {Button} from '../Button/';
import Xmark from '../Icons/Xmark';
import PenToSquare from '../Icons/PenToSquare';

interface DropDownProps {
    title: string | JSX.Element;
    themeColor: string;
}

export default function DropDown({title, themeColor}: DropDownProps): JSX.Element {

  const [show, setShow] = useState(false)

  return (
    <div onClick={(): void => setShow(!show)} className='belDropDown'>
        <span>{title}</span>
        <div className={!show ? 'belDropDown-content' : 'belDropDown-content-hover'}>
            <Button backgroundColor={themeColor} text={<PenToSquare fill={themeColor ? '#fff' : '#9a9a9a'} size={20}/>} />
            <Button backgroundColor={themeColor} text={<Xmark fill={themeColor ? '#fff' : '#9a9a9a'} size={20}/>} />
        </div>
    </div>
  )
}
