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
import PenToSquare from '../icons/PenToSquare';

import styles from './table.module.css';
import Paginator from '../paginator';

interface ActionsProps<T> {
  showInfo?: boolean;
  showDownload?: boolean;
  showShare?: boolean;
  showSee?: boolean;
  actions?: { label: string | JSX.Element; callback: (d: T) => void }[];
  themeColor?: string;
  item: T;
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
  showInfo?: boolean;
  showDownload?: boolean;
  showShare?: boolean;
  showSee?: boolean;
}

export function Table<T>({
  columns,
  data,
  getRowKey,
  themeColor,
  showPages = false,
  itemsPerPage = 5,
  actions = [],
  caption,
  showInfo,
  showDownload,
  showShare,
  showSee,
}: TableProps<T>): JSX.Element {
  const [stateData, setStateData] = useState<T[]>(data);
  const { paginator, next, previous, goPage, onDelete } = usePaginate({
    data: stateData,
    setData: setStateData,
    itemsPerPage: itemsPerPage,
  });
  const [selected, setSelected] = useState<T[]>([]);

  useEffect(() => {
    setStateData(data);
  }, [data]);

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
      <div className={styles.control}>
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
      <div className={styles.table_container}>
        <table
          style={themeColor ? { borderBottom: `2px solid ${themeColor}` } : {}}
          className={styles.table}
        >
          {caption && <caption className={styles.caption}>{caption}</caption>}
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
                  {columns.map(({ getValue }, idx) => (
                    <td key={idx}>
                      {React.isValidElement(getValue(item))
                        ? getValue(item)
                        : String(getValue(item))}
                    </td>
                  ))}
                  <td>
                    <Actions
                      showInfo={showInfo}
                      showDownload={showDownload}
                      showShare={showShare}
                      showSee={showSee}
                      themeColor={themeColor}
                      actions={actions}
                      item={item}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>
                  <span className={styles.not_info_found}>
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

function Actions<T>({
  showInfo,
  showDownload,
  showShare,
  showSee,
  actions,
  themeColor,
  item,
}: ActionsProps<T>) {
  return (
    <div className={styles.actions}>
      {showInfo && (
        <Button
          variant={'icon'}
          onClick={(): void => console.log('Custom Info Button')}
          text={<Info />}
        />
      )}
      {showDownload && (
        <Button
          variant={'icon'}
          onClick={(): void => console.log('Custom Download Button')}
          text={<FileArrowDown />}
        />
      )}
      {showShare && (
        <Button
          variant={'icon'}
          onClick={(): void => console.log('Custom Share Button')}
          text={<ShareNodes />}
        />
      )}
      {showSee && (
        <Button
          variant={'icon'}
          onClick={(): void => console.log('Custom See Button')}
          text={<Eye />}
        />
      )}
      {actions &&
        actions.map((action, index) => (
          <Button
            backgroundColor={themeColor ? themeColor : '#34495e'}
            primary
            key={index}
            onClick={(): void => action.callback(item)}
            text={action.label}
          />
        ))}
      <DropDown themeColor={themeColor} title={<Ellipsis />}>
        <Button
          backgroundColor={themeColor}
          text={
            <PenToSquare fill={themeColor ? '#fff' : '#9a9a9a'} size={20} />
          }
        />
        <Button
          backgroundColor={themeColor}
          text={<Xmark fill={themeColor ? '#fff' : '#9a9a9a'} size={20} />}
        />
      </DropDown>
    </div>
  );
}
