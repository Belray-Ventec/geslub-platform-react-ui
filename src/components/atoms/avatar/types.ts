export type Size = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface AvatarProps {
  title?: string;
  src?: string;
  size?: Size;
  children?: React.ReactNode;
}
