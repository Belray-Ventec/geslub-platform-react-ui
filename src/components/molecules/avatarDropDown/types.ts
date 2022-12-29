import { AvatarProps } from '../../atoms/avatar/types';

export interface AvatarDropDownProps extends AvatarProps {
  children?: React.ReactNode;
  avatarTitle?: string;
  right?: boolean;
}
