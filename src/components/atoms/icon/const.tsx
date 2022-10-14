import React from 'react';
import Add from '../../../assets/icons/Add';
import CaretRight from '../../../assets/icons/CaretRight';
import Ellipsis from '../../../assets/icons/Ellipsis';
import Eye from '../../../assets/icons/Eye';
import FileArrowDown from '../../../assets/icons/FileArrowDown';
import Home from '../../../assets/icons/Home';
import Info from '../../../assets/icons/Info';
import PenToSquare from '../../../assets/icons/PenToSquare';
import ShareNodes from '../../../assets/icons/ShareNodes';
import Document from '../../../assets/icons/Document';
import BookOpen from '../../../assets/icons/BookOpen';
import User from '../../../assets/icons/User';
import BullHorn from '../../../assets/icons/BullHorn';
import { CircleXmark } from '../../../assets/icons/CircleXmark';
import AngleDown from '../../../assets/icons/AngleDown';
import Bars from '../../../assets/icons/Bars';
import Star from '../../../assets/icons/Star';
import CircleQuestion from '../../../assets/icons/CircleQuestion';
import AngleLeft from '../../../assets/icons/AngleLeft';
import Video from '../../../assets/icons/Video';
import Tag from '../../../assets/icons/Tag';
import { iconsType } from './types';
import { Check, Trash } from '../../../assets/icons';
export const icons: iconsType[] = [
  'Add',
  'AngleLeft',
  'BookOpen',
  'BullHorn',
  'CaretRight',
  'Document',
  'Ellipsis',
  'Eye',
  'FileArrowDown',
  'Home',
  'Info',
  'PenToSquare',
  'ShareNodes',
  'User',
  'Video',
  'CircleQuestion',
  'Star',
  'Tag',
  'Bars',
  'AngleDown',
  'CircleXmark',
  'Trash',
  'Check',
];

export const iconList = (size: number, color: string, src?: string) => {
  return {
    Home: <Home color={color} size={size} />,
    CaretRight: <CaretRight size={size} color={color} />,
    Eye: <Eye size={size} color={color} />,
    Info: <Info size={size} color={color} />,
    Ellipsis: <Ellipsis size={size} color={color} />,
    FileArrowDown: <FileArrowDown size={size} color={color} />,
    PenToSquare: <PenToSquare size={size} fill={color} />,
    ShareNodes: <ShareNodes size={size} fill={color} />,
    Add: <Add size={size} fill={color} />,
    Document: <Document size={size} color={color} />,
    BookOpen: <BookOpen size={size} color={color} />,
    BullHorn: <BullHorn size={size} color={color} />,
    User: <User size={size} color={color} />,
    Video: <Video size={size} color={color} />,
    AngleLeft: <AngleLeft size={size} color={color} />,
    CircleQuestion: <CircleQuestion size={size} color={color} />,
    Star: <Star size={size} color={color} />,
    Bars: <Bars size={size} color={color} />,
    AngleDown: <AngleDown size={size} color={color} />,
    Tag: <Tag size={size} color={color} />,
    CircleXmark: <CircleXmark size={size} color={color} />,
    Image: <img alt="icon" src={src} width={size} height={size} />,
    Trash: <Trash size={size} color={color} />,
    Check: <Check size={size} color={color} />,
  };
};
