export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  as?: 'p' | 'span' | 'div';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'default';
  color?: string;
  isBold?: boolean;
  isItalic?: boolean;
  isStriked?: boolean;
  align?: 'left' | 'center' | 'right' | 'justify';
  className?: string;
  style?: React.CSSProperties;
}
