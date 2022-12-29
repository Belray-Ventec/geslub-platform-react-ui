export type Size = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLDivElement> {
  title?: string;
  src?: string;
  size?: Size;
  className?: string;
  children?: React.ReactNode;
}
