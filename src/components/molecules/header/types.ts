export interface HeaderProps extends React.HTMLProps<HTMLDivElement> {
  title: string;
  children?: React.ReactNode;
  titleSize?: 'xl' | 'lg' | 'md' | 'sm' | 'xs' | '2xs' | '3xs' | '4xs';
}
