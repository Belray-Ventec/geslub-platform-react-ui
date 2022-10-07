export type SortType = 'asc' | 'desc' | 'none' | 'default';

export interface SortProps<T> {
  data: T[];
  getValue: (item: T) => React.ReactNode;
  onSort: (data: T[]) => void;
  label: string;
  themeColor?: string;
  onSorted: (column: string) => void;
  lastSortedColumn: string;
}

export interface UseSortProps<T> {
  data: T[];
  getValue: (item: T) => React.ReactNode;
  onSort: (data: T[]) => void;
  onSorted: (column: string) => void;
  label: string;
}
