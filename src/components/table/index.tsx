import React, { useEffect, useState } from 'react';
import usePaginate from '../../hooks/usePaginate';
import { Button } from '../button';
import DropDown from '../dropDown';
import Add from '../icons/Add';
import Ellipsis from '../icons/Ellipsis';
import Eye from '../icons/Eye';
import FileArrowDown from '../icons/FileArrowDown';
import Info from '../icons/Info';
import ShareNodes from '../icons/ShareNodes';
import Xmark from '../icons/Xmark';
import Paginator from '../paginator';
import Search from '../search';
import PenToSquare from '../icons/PenToSquare';

import './table.css';

export interface TableProps<T> {
  initialData: T[];
  columns: { label: string; key: keyof T }[];
  getRowKey: (d: T) => string | number;
  renderCell?: (key: keyof T, value: unknown) => JSX.Element;
  themeColor: string;
  showPages: boolean;
  itemsPerPage: number;
  actions: { label: string | JSX.Element; callback: (d: T) => void }[];
  caption?: string;
  showInfo?: boolean;
  showDownload?: boolean;
  showShare?: boolean;
  showSee?: boolean;
  themeTextColor: string;
}

export default function Table<T>({
  columns,
  initialData,
  getRowKey,
  renderCell,
  themeColor,
  showPages = false,
  itemsPerPage,
  actions,
  caption,
  showInfo,
  showDownload,
  showShare,
  showSee,
}: TableProps<T>): JSX.Element {
  const [search, setSearch] = useState('');
  const [data, setData] = useState<T[]>(initialData);
  const { paginator, next, previous, goPage, onDelete } = usePaginate({
    data,
    setData,
    itemsPerPage: itemsPerPage,
    search,
  });
  const [selected, setSelected] = useState<T[]>([]);

  useEffect(() => {
    goPage(1);
  }, [search]);

  const isChecked = (item: T): void => {
    if (selected.includes(item)) {
      const filter = selected.filter((t) => item !== t);
      setSelected([...filter]);
    } else {
      setSelected([...selected, item]);
    }
  };

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <div className="control">
        <Button
          primary
          backgroundColor={themeColor ? themeColor : '#fff'}
          variant="text"
          text={<Add size={20} fill={themeColor ? '#fff' : '#9a9a9a'} />}
        />
        <Button
          primary
          backgroundColor={themeColor ? themeColor : '#fff'}
          variant="text"
          text={<ShareNodes size={20} fill={themeColor ? '#fff' : '#9a9a9a'} />}
        />
        <Button
          onClick={(): void => onDelete(selected)}
          primary
          backgroundColor={themeColor ? themeColor : '#fff'}
          variant="text"
          text={<Xmark size={20} fill={themeColor ? '#fff' : '#9a9a9a'} />}
        />
      </div>
      <div className="tableContainer">
        <table
          style={themeColor ? { borderBottom: `2px solid ${themeColor}` } : {}}
          className="gesTable"
        >
          {caption && <caption className="belCaption">{caption}</caption>}
          <thead>
            <tr
              style={
                themeColor
                  ? { backgroundColor: themeColor }
                  : {
                      backgroundColor: '#fff',
                      color: '#000',
                      boxShadow:
                        '0 2px 6px rgb(0 21 64 / 10%), 0 10px 20px rgb(0 21 64 / 5%)',
                    }
              }
            >
              <th></th>
              {columns.map(({ label }) => (
                <th key={label}>{label}</th>
              ))}
              {actions.length > 0 && <th>Acciones</th>}
            </tr>
          </thead>
          <tbody>
            {paginator.data.length > 0 ? (
              paginator.data.map((item, index) => (
                <tr onClick={(): void => isChecked(item)} key={getRowKey(item)}>
                  <td>
                    <input
                      className="belcheckbox"
                      readOnly
                      id={`belCheck${index}`}
                      checked={selected.includes(item)}
                      type="checkbox"
                    />
                  </td>
                  {columns.map(({ key }, idx) => (
                    <td key={idx}>
                      {renderCell
                        ? renderCell(key, item[key])
                        : String(item[key])}
                    </td>
                  ))}
                  <td>
                    <div className="acciones">
                      <DropDown
                        themeColor={themeColor}
                        onlyResponsive
                        title={'Acciones'}
                      >
                        {showInfo && (
                          <Button
                            variant={'icon'}
                            onClick={(): void =>
                              console.log('Custom Info Button')
                            }
                            text={<Info />}
                          />
                        )}
                        {showDownload && (
                          <Button
                            variant={'icon'}
                            onClick={(): void =>
                              console.log('Custom Download Button')
                            }
                            text={<FileArrowDown />}
                          />
                        )}
                        {showShare && (
                          <Button
                            variant={'icon'}
                            onClick={(): void =>
                              console.log('Custom Share Button')
                            }
                            text={<ShareNodes />}
                          />
                        )}
                        {showSee && (
                          <Button
                            variant={'icon'}
                            onClick={(): void =>
                              console.log('Custom See Button')
                            }
                            text={<Eye />}
                          />
                        )}
                        {actions.map((action, index) => (
                          <Button
                            backgroundColor={
                              themeColor ? themeColor : '#34495e'
                            }
                            primary
                            key={index}
                            onClick={(): void => action.callback(item)}
                            text={action.label}
                          />
                        ))}
                      </DropDown>
                      <DropDown themeColor={themeColor} title={<Ellipsis />}>
                        <Button
                          backgroundColor={themeColor}
                          text={
                            <PenToSquare
                              fill={themeColor ? '#fff' : '#9a9a9a'}
                              size={20}
                            />
                          }
                        />
                        <Button
                          backgroundColor={themeColor}
                          text={
                            <Xmark
                              fill={themeColor ? '#fff' : '#9a9a9a'}
                              size={20}
                            />
                          }
                        />
                      </DropDown>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>
                  <span className="notInfoFound">
                    No hay información disponible
                  </span>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Paginator
        themeColor={themeColor}
        showPages={showPages}
        next={next}
        previous={previous}
        goPage={goPage}
        paginator={paginator}
      />
    </>
  );
}
