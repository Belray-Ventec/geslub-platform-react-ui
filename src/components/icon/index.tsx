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
import styles from './icon.module.css';

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
  onClick?: () => void;
  ariaLabel?: string;
}

export function Icon({
  icon,
  color = '#000',
  size = 25,
  onClick,
  ariaLabel,
}: IconProps) {
  if (icon === 'Home')
    return (
      <i
        className={onClick && styles.icon_click}
        aria-label={ariaLabel && ariaLabel}
        onClick={() => onClick && onClick()}
      >
        <Home color={color} size={size} />
      </i>
    );

  if (icon === 'CaretRight')
    return (
      <i
        className={onClick && styles.icon_click}
        aria-label={ariaLabel && ariaLabel}
        onClick={() => onClick && onClick()}
      >
        <CaretRight size={size} color={color} />
      </i>
    );

  if (icon === 'Eye')
    return (
      <i
        className={onClick && styles.icon_click}
        aria-label={ariaLabel && ariaLabel}
        onClick={() => onClick && onClick()}
      >
        <Eye size={size} color={color} />
      </i>
    );

  if (icon === 'Info')
    return (
      <i
        className={onClick && styles.icon_click}
        aria-label={ariaLabel && ariaLabel}
        onClick={() => onClick && onClick()}
      >
        <Info size={size} color={color} />
      </i>
    );

  if (icon === 'Ellipsis')
    return (
      <i
        className={onClick && styles.icon_click}
        aria-label={ariaLabel && ariaLabel}
        onClick={() => onClick && onClick()}
      >
        <Ellipsis size={size} color={color} />
      </i>
    );

  if (icon === 'FileArrowDown')
    return (
      <i
        className={onClick && styles.icon_click}
        aria-label={ariaLabel && ariaLabel}
        onClick={() => onClick && onClick()}
      >
        <FileArrowDown size={size} color={color} />
      </i>
    );

  if (icon === 'PenToSquare')
    return (
      <i
        className={onClick && styles.icon_click}
        aria-label={ariaLabel && ariaLabel}
        onClick={() => onClick && onClick()}
      >
        <PenToSquare size={size} fill={color} />
      </i>
    );

  if (icon === 'ShareNodes')
    return (
      <i
        className={onClick && styles.icon_click}
        aria-label={ariaLabel && ariaLabel}
        onClick={() => onClick && onClick()}
      >
        <ShareNodes size={size} fill={color} />
      </i>
    );

  if (icon === 'Add')
    return (
      <i
        className={onClick && styles.icon_click}
        aria-label={ariaLabel && ariaLabel}
        onClick={() => onClick && onClick()}
      >
        <Add size={size} fill={color} />
      </i>
    );

  if (icon === 'Document')
    return (
      <i
        className={onClick && styles.icon_click}
        aria-label={ariaLabel && ariaLabel}
        onClick={() => onClick && onClick()}
      >
        <Document size={size} color={color} />
      </i>
    );

  if (icon === 'BookOpen')
    return (
      <i
        className={onClick && styles.icon_click}
        aria-label={ariaLabel && ariaLabel}
        onClick={() => onClick && onClick()}
      >
        <BookOpen size={size} color={color} />
      </i>
    );

  if (icon === 'BullHorn')
    return (
      <i
        className={onClick && styles.icon_click}
        aria-label={ariaLabel && ariaLabel}
        onClick={() => onClick && onClick()}
      >
        <BullHorn size={size} color={color} />
      </i>
    );

  if (icon === 'User')
    return (
      <i
        className={onClick && styles.icon_click}
        aria-label={ariaLabel && ariaLabel}
        onClick={() => onClick && onClick()}
      >
        <User size={size} color={color} />
      </i>
    );

  if (icon === 'Video')
    return (
      <i
        className={onClick && styles.icon_click}
        aria-label={ariaLabel && ariaLabel}
        onClick={() => onClick && onClick()}
      >
        <Video size={size} color={color} />
      </i>
    );

  if (icon === 'AngleLeft')
    return (
      <i
        className={onClick && styles.icon_click}
        aria-label={ariaLabel && ariaLabel}
        onClick={() => onClick && onClick()}
      >
        <AngleLeft size={size} color={color} />
      </i>
    );

  if (icon === 'CircleQuestion')
    return (
      <i
        className={onClick && styles.icon_click}
        aria-label={ariaLabel && ariaLabel}
        onClick={() => onClick && onClick()}
      >
        <CircleQuestion size={size} color={color} />
      </i>
    );

  if (icon === 'Star')
    return (
      <i
        className={onClick && styles.icon_click}
        aria-label={ariaLabel && ariaLabel}
        onClick={() => onClick && onClick()}
      >
        <Star size={size} color={color} />
      </i>
    );

  if (icon === 'Tag')
    return (
      <i
        className={onClick && styles.icon_click}
        aria-label={ariaLabel && ariaLabel}
        onClick={() => onClick && onClick()}
      >
        <Tag size={size} color={color} />
      </i>
    );

  if (icon === 'Bars')
    return (
      <i
        className={onClick && styles.icon_click}
        aria-label={ariaLabel && ariaLabel}
        onClick={() => onClick && onClick()}
      >
        <Bars size={size} color={color} />
      </i>
    );

  if (icon === 'FileArrowDown')
    return (
      <i
        className={onClick && styles.icon_click}
        aria-label={ariaLabel && ariaLabel}
        onClick={() => onClick && onClick()}
      >
        <FileArrowDown size={size} color={color} />
      </i>
    );

  return (
    <i
      className={onClick && styles.icon_click}
      aria-label={ariaLabel && ariaLabel}
      onClick={() => onClick && onClick()}
    >
      <img alt="icon" src={icon} width={size} height={size} />
    </i>
  );
}
