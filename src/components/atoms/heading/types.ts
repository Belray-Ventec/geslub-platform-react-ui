type Size = 'xl' | 'lg' | 'md' | 'sm' | 'xs' | '2xs' | '3xs' | '4xs';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: string;
  isBold?: boolean;
  isItalic?: boolean;
  isNoWrap?: boolean;
  size?: Size;
  className?: string;
  style?: React.CSSProperties;
}
