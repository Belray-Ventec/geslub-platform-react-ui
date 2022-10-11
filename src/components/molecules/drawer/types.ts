export interface DrawerProps {
  title?: React.ReactNode;
  logo?: string;
  themeColor?: string;
  children: React.ReactNode;
  isOpen: boolean;
  onStateChange: () => void;
}

export interface DrawerItemProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  isActive?: boolean;
  isOpen: boolean;
  isSubOpen?: boolean;
  onClick?: () => void;
}

export interface DrawerSubItemProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  title: string;
  isOpen: boolean;
  isActive?: boolean;
  onStateChange: () => void;
}
