export interface TagProps {
  children: React.ReactNode;
  backgroundColor?: string;
  color?: string;
  rounded?: boolean;
  onClick?: (text: string) => void;
}
