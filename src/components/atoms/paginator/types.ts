import { StatePaginatorProps } from '../../../hooks/usePaginate';

export interface PaginatorProps<T> {
  paginator: StatePaginatorProps<T>;
  showPages?: boolean;
  next: () => void;
  previous: () => void;
  goPage: (page: number) => void;
  themeColor: string | undefined;
}
