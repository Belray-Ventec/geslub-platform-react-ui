import React, { useEffect, useState } from 'react'
import styles from './sort.module.css' 
import SortDown from '../icons/SortDown';
import SortUp from '../icons/SortUp';
import {Sort as SortIcon} from '../icons/Sort'

export type SortType = 'asc' | 'desc' | 'none' | 'default';

interface SortProps<T> {
    data: T[];
    getValue: (item: T) => React.ReactNode;
    onSort: (data: T[]) => void;
    label: string;
}

export function Sort<T>({data, getValue, onSort, label} : SortProps<T>) {
  const [sort, setSort] = useState<SortType>('default')

  const [defaultData] = useState(data)

  
  const nextSort = () => {
    switch (sort) {
      case 'asc':
        setSort('desc')
        break;
      case 'desc':
        setSort('none')
        break;
      case 'none':
        setSort('asc')
        break;
      case 'default':
        setSort('asc')
        break;
      default:
        setSort('default')

    }
  }

  useEffect(() => {
    sorted(sort)
    
  }, [sort])
  

  const sorted = (sortType: string) => {
    if (sortType !== 'default') {

      const sortedData = [...defaultData].sort((a, b) => {
        if (getValue(a)! < getValue(b)!) {
          return -1;
        }
        if (getValue(a)! > getValue(b)!) {
          return 1;
        }
        return 0;
      })
  
      if (sortType === 'desc') {
        sortedData.reverse()
      }

      sortType === 'none' ? onSort(defaultData) : onSort(sortedData)
    }
  }

  





  return (
    <div onClick={() => nextSort()} className={styles.container}>
      {label} {sort === 'asc' ? <SortUp size={15} /> : sort === 'desc' ? <SortDown size={15}/> : <SortIcon size={15}/>}
    </div>
  )
}
