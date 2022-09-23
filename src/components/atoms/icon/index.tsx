import React from 'react';
import Add from '../../../assets/icons/Add';
import AngleLeft from '../../../assets/icons/AngleLeft';
import Bars from '../../../assets/icons/Bars';
import BookOpen from '../../../assets/icons/BookOpen';
import BullHorn from '../../../assets/icons/BullHorn';
import CaretRight from '../../../assets/icons/CaretRight';
import CircleQuestion from '../../../assets/icons/CircleQuestion';
import Document from '../../../assets/icons/Document';
import Ellipsis from '../../../assets/icons/Ellipsis';
import Eye from '../../../assets/icons/Eye';
import FileArrowDown from '../../../assets/icons/FileArrowDown';
import Home from '../../../assets/icons/Home';
import Info from '../../../assets/icons/Info';
import PenToSquare from '../../../assets/icons/PenToSquare';
import ShareNodes from '../../../assets/icons/ShareNodes';
import Star from '../../../assets/icons/Star';
import Tag from '../../../assets/icons/Tag';
import User from '../../../assets/icons/User';
import Video from '../../../assets/icons/Video';
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
