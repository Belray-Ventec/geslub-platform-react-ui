import { useEffect, useState } from 'react';
import { SortType, UseSortProps } from '../types';

export default function useSort<T>({
  data,
  getValue,
  onSort,
  onSorted,
  label,
}: UseSortProps<T>) {
  const [sort, setSort] = useState<SortType>('default');

  const nextSort = () => {
    const sortObject = {
      asc: () => setSort('desc'),
      desc: () => setSort('none'),
      none: () => setSort('asc'),
      default: () => setSort('asc'),
    };
    const defaultSort = setSort('default');

    const nextSort = sortObject[sort] || defaultSort;
    nextSort();
  };

  const sorted = (sortType: SortType) => {
    if (sortType !== 'default') {
      const sortedData = [...data].sort((a, b) => {
        if (getValue(a)! < getValue(b)!) return -1;

        if (getValue(a)! > getValue(b)!) return 1;

        return 0;
      });

      if (sortType === 'desc') sortedData.reverse();

      sortType === 'none' ? onSort(data) : onSort(sortedData);
    }
  };

  useEffect(() => {
    sorted(sort);
    onSorted(label);
  }, [sort]);

  return {
    nextSort,
    sort,
  };
}
