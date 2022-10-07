import React from 'react';
import styles from './sort.module.css';
import SortDown from '../../../assets/icons/SortDown';
import SortUp from '../../../assets/icons/SortUp';
import { Sort as SortIcon } from '../../../assets/icons/Sort';
import { SortProps } from './types';
import useSort from './hooks/useSort';
import { stylesInline } from './const';

export function Sort<T>({
  data,
  getValue,
  onSort,
  label,
  themeColor,
  onSorted,
  lastSortedColumn,
}: SortProps<T>) {
  const { sort, nextSort } = useSort({
    data,
    getValue,
    onSort,
    onSorted,
    label,
  });

  return (
    <div
      style={{ color: themeColor ? '#fff' : undefined }}
      onClick={() => nextSort()}
      className={styles.container}
    >
      {label}{' '}
      {lastSortedColumn === label ? (
        sort === 'asc' ? (
          <SortUp fill={stylesInline(themeColor).sortFill} size={15} />
        ) : sort === 'desc' ? (
          <SortDown fill={stylesInline(themeColor).sortFill} size={15} />
        ) : (
          <SortIcon fill={stylesInline(themeColor).sortFill} size={15} />
        )
      ) : (
        <SortIcon fill={stylesInline(themeColor).sortFill} size={15} />
      )}
    </div>
  );
}
