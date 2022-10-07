export interface ActionsProps<T> {
  showInfo?: boolean;
  showDownload?: boolean;
  showShare?: boolean;
  showSee?: boolean;
  actions?: { label: string | JSX.Element; callback: (d: T) => void }[];
  themeColor?: string;
  item: T;
  onEdit?: (d: T) => void;
  onDeleteItem?: (d: T) => void;
  onSee?: (d: T) => void;
  onDownload?: (d: T) => void;
  onShare?: (d: T) => void;
  onInfo?: (d: T) => void;
  showAdminOptions?: boolean;
}

export interface TableProps<T> {
  data: T[];
  columns: {
    label: string;
    getValue: (item: T) => React.ReactNode;
  }[];
  getRowKey: (d: T) => string | number;
  themeColor?: string;
  showPages?: boolean;
  itemsPerPage?: number;
  actions?: { label: string | JSX.Element; callback: (d: T) => void }[];
  caption?: string;
  showHeaderButtons?: boolean;
  showInfo?: boolean;
  showDownload?: boolean;
  showShare?: boolean;
  showSee?: boolean;
  add?: () => void;
  share?: () => void;
  onDelete?: (d: T[]) => void;
  onEdit?: (d: T) => void;
  onSee?: (d: T) => void;
  onDownload?: (d: T) => void;
  onInfo?: (d: T) => void;
  onShare?: (d: T) => void;
  onDeleteItem?: (d: T) => void;
  showAdminOptions?: boolean;
}

export interface HeaderButtonProps<T> {
  themeColor?: string;
  add?: () => void;
  share?: () => void;
  onDelete?: (d: T[]) => void;
  selected: T[];
}

export interface ThProps<T> {
  label: string;
  stateData: T[];
  getValue: (item: T) => React.ReactNode;
  themeColor?: string;
  handleSort: (data: T[]) => void;
}
