import React, { useEffect, useState } from 'react';
import usePaginate from '../../hooks/usePaginate';
import Paginator from '../paginator';
import Search from '../search';
import './table.css';

export interface TableProps<T> {
    data: T[];
    columns: { label: string; key: keyof T }[];
    getRowKey: (d: T) => string | number;
    renderCell?: (key: keyof T, value: unknown) => JSX.Element;
}

export default function Table<T>({columns, data, getRowKey, renderCell}: TableProps<T>): JSX.Element {
  
  const [search, setSearch] = useState('')
  const {paginator, next, previous, goPage} = usePaginate({data, itemsPerPage: 5, search});

  useEffect(() => {
    goPage(1);
  }, [search])
  

  return (
<div className='tableContainer'>
  <Search search={search} setSearch={setSearch} />
  <table>
    <thead>
      <tr>
      {columns.map(({ label }) => (
          <th key={label}>{label}</th>
      ))}
      </tr>
    </thead>
    <tbody>
      {paginator.data.map((item) => (
        <tr key={getRowKey(item)}>
          {columns.map(({key}, idx) => (
              <td key={idx}>
                  {renderCell ? renderCell(key, item[key]) : String(item[key])}
              </td>
          )) }
        </tr> 
      ))}
    </tbody>
  </table>
  <Paginator showPages next={next} previous={previous} goPage={goPage} paginator={paginator} />
</div>
  )
}
