import React from 'react';
import Add from '../icons/Add';
import AngleLeft from '../icons/AngleLeft';
import Bars from '../icons/Bars';
import BookOpen from '../icons/BookOpen';
import BullHorn from '../icons/BullHorn';
import CaretRight from '../icons/CaretRight';
import CircleQuestion from '../icons/CircleQuestion';
import Document from '../icons/Document';
import Ellipsis from '../icons/Ellipsis';
import Eye from '../icons/Eye';
import FileArrowDown from '../icons/FileArrowDown';
import Home from '../icons/Home';
import Info from '../icons/Info';
import PenToSquare from '../icons/PenToSquare';
import ShareNodes from '../icons/ShareNodes';
import Star from '../icons/Star';
import Tag from '../icons/Tag';
import User from '../icons/User';
import Video from '../icons/Video';

export type iconsType =
  | 'Home'
  | 'Eye'
  | 'CaretRight'
  | 'AngleLeft'
  | 'Info'
  | 'Ellipsis'
  | 'FileArrowDown'
  | 'PenToSquare'
  | 'ShareNodes'
  | 'Add'
  | 'Document'
  | 'BookOpen'
  | 'BullHorn'
  | 'User'
  | 'Video'
  | 'CircleQuestion'
  | 'Star'
  | 'Tag'
  | 'Bars';

interface IconProps {
  color?: string;
  size?: number;
  icon?: iconsType;
}

export function Icon({ icon, color = '#000', size = 25 }: IconProps) {
  if (icon === 'Home')
    return (
      <i>
        <Home color={color} size={size} />
      </i>
    );

  if (icon === 'CaretRight')
    return (
      <i>
        <CaretRight size={size} color={color} />
      </i>
    );

  if (icon === 'Eye')
    return (
      <i>
        <Eye size={size} color={color} />
      </i>
    );

  if (icon === 'Info')
    return (
      <i>
        <Info size={size} color={color} />
      </i>
    );

  if (icon === 'Ellipsis')
    return (
      <i>
        <Ellipsis size={size} color={color} />
      </i>
    );

  if (icon === 'FileArrowDown')
    return (
      <i>
        <FileArrowDown size={size} color={color} />
      </i>
    );

  if (icon === 'PenToSquare')
    return (
      <i>
        <PenToSquare size={size} fill={color} />
      </i>
    );

  if (icon === 'ShareNodes')
    return (
      <i>
        <ShareNodes size={size} fill={color} />
      </i>
    );

  if (icon === 'Add')
    return (
      <i>
        <Add size={size} fill={color} />
      </i>
    );

  if (icon === 'Document')
    return (
      <i>
        <Document size={size} color={color} />
      </i>
    );

  if (icon === 'BookOpen')
    return (
      <i>
        <BookOpen size={size} color={color} />
      </i>
    );

  if (icon === 'BullHorn')
    return (
      <i>
        <BullHorn size={size} color={color} />
      </i>
    );

  if (icon === 'User')
    return (
      <i>
        <User size={size} color={color} />
      </i>
    );

  if (icon === 'Video')
    return (
      <i>
        <Video size={size} color={color} />
      </i>
    );

  if (icon === 'AngleLeft')
    return (
      <i>
        <AngleLeft size={size} color={color} />
      </i>
    );

  if (icon === 'CircleQuestion')
    return (
      <i>
        <CircleQuestion size={size} color={color} />
      </i>
    );

  if (icon === 'Star')
    return (
      <i>
        <Star size={size} color={color} />
      </i>
    );

  if (icon === 'Tag')
    return (
      <i>
        <Tag size={size} color={color} />
      </i>
    );

  if (icon === 'Bars')
    return (
      <i>
        <Bars size={size} color={color} />
      </i>
    );

  return (
    <i>
      <img alt="icon" src={icon} width={size} height={size} />
    </i>
  );
}
