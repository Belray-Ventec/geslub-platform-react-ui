import { useEffect, useState } from 'react';
import { paginar } from '../utils/paginate';

export interface UsePaginateProps<T> {
  data: T[];
  itemsPerPage?: number;
  search: string;
  setData: React.Dispatch<React.SetStateAction<T[]>>;
}

export interface StatePaginatorProps<T> {
  data: T[];
  itemsPerPage: number;
  page: number;
  nextPage: number | null;
  previousPage: number;
  totalPages: number;
  totalItems: number;
}

interface PaginateReturnProps<T> {
  paginator: StatePaginatorProps<T>;
  next: () => void;
  previous: () => void;
  goPage: (page: number) => void;
  onDelete: (items: T[]) => void;
}

export default function usePaginate<T>({
  data,
  setData,
  itemsPerPage = 2,
  search,
}: UsePaginateProps<T>): PaginateReturnProps<T> {
  const [paginator, setPaginator] = useState({
    data: paginar(data, 1, itemsPerPage),
    itemsPerPage: itemsPerPage,
    page: 1,
    nextPage: 2,
    previousPage: 0,
    totalPages: Math.ceil(data.length / itemsPerPage),
    totalItems: data.length,
  });

  useEffect(() => {
    goPage(1);
  }, [data]);

  const next = (): void => {
    if (paginator.nextPage > paginator.totalPages) {
      return;
    }
    goPage(paginator.page + 1);
  };
  const previous = (): void => {
    if (paginator.previousPage <= 0) {
      return;
    }
    goPage(paginator.page - 1);
  };
  const goPage = (page: number): void => {
    setPaginator({
      ...paginator,
      nextPage: page + 1,
      page: page,
      previousPage: page - 1,
      data: paginar(filterData(search), page, paginator.itemsPerPage),
      totalItems: filterData(search).length,
      totalPages: Math.ceil(filterData(search).length / paginator.itemsPerPage),
    });
  };

  const onDelete = (items: T[]): void => {
    const filter = data.filter((i) => !items.includes(i));
    setData(filter);
  };

  const filterData = (searchTerm: string): T[] => {
    if (searchTerm !== '') {
      const filtered = data.filter((item) => {
        return Object.values(item)
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      return filtered;
    } else {
      return data;
    }
  };

  const returnPaginator: PaginateReturnProps<T> = {
    paginator: paginator,
    next: next,
    previous: previous,
    goPage: goPage,
    onDelete: onDelete,
  };
  return returnPaginator;
}
