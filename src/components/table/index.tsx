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
import { Sort } from '../sort';

interface ActionsProps<T> {
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
  showMoreOptions?: boolean;

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
  showMoreOptions?: boolean;

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
  showHeaderButtons,
  showInfo,
  showDownload,
  showShare,
  showSee,
  onDelete,
  add,
  share,
  onEdit,
  onSee,
  onDownload,
  onInfo,
  onShare,
  onDeleteItem,
  showMoreOptions
}: TableProps<T>): JSX.Element {
  const [lastSortedColumn, setLastSortedColumn] = useState('')
  const [stateData, setStateData] = useState<T[]>(data);
  const { paginator, next, previous, goPage } = usePaginate({
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

  const handleSort = (data: T[]) => {
    setStateData(data);
  }

  return (
    <>
      {showHeaderButtons && (
              <div className={styles.control}>
              <Button
                ariaLabel='add'
                primary
                backgroundColor={themeColor ? themeColor : '#fff'}
                variant="text"
                text={<Add size={20} fill={themeColor ? '#fff' : '#9a9a9a'} />}
                onClick={() => add && add()}
              />
              <Button
                ariaLabel='share'
                primary
                backgroundColor={themeColor ? themeColor : '#fff'}
                variant="text"
                text={<ShareNodes size={20} fill={themeColor ? '#fff' : '#9a9a9a'} />}
                onClick={() => share && share()}
              />
              <Button
                ariaLabel='delete'
                onClick={(): void => onDelete && onDelete(selected)}
                primary
                backgroundColor={themeColor ? themeColor : '#fff'}
                variant="text"
                text={<Xmark size={20} fill={themeColor ? '#fff' : '#9a9a9a'} />}
              />
            </div>
      )}
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
              {paginator.data.length > 0 && <th></th>}
              {columns.map(({ label, getValue }) => (
                <th className={styles.column_header} key={label}>
                  <Sort lastSortedColumn={lastSortedColumn} onSorted={(column) => setLastSortedColumn(column)} themeColor={themeColor} label={label} data={stateData} getValue={getValue} onSort={(data) => handleSort(data)}/>
                </th>
              ))}
              {paginator.data.length > 0 && <th>Acciones</th>}
            </tr>
          </thead>
          <tbody>
            {paginator.data.length > 0 ? (
              paginator.data.map((item, index) => (
                <tr onClick={(): void => isChecked(item)} key={getRowKey(item)}>
                  <td>
                    <input
                      readOnly
                      id={`belCheck${index}`}
                      checked={selected.includes(item)}
                      type="checkbox"
                    />
                  </td>
                  {columns.map(({ getValue, label }, idx) => (
                    <td key={idx}>
                      {React.isValidElement(getValue(item))
                        ? getValue(item)
                        : String(getValue(item) || `Sin Información`)}
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
                      onEdit={onEdit}
                      onDeleteItem={onDeleteItem}
                      onSee={onSee}
                      onDownload={onDownload}
                      onShare={onShare}
                      onInfo={onInfo}
                      showMoreOptions={showMoreOptions}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className={styles.not_info_found} colSpan={actions ? columns.length + 1 : columns.length}>
                    No hay información disponible
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
  onEdit,
  onDeleteItem,
  onSee,
  onDownload,
  onShare,
  onInfo,
  showMoreOptions
}: ActionsProps<T>) {
  return (
    <div className={styles.actions}>
      {showInfo && (
        <Button
          ariaLabel='infoItem'
          variant={'icon'}
          onClick={(): void => onInfo && onInfo(item)}
          text={<Info />}
        />
      )}
      {showDownload && (
        <Button
          ariaLabel='downloadItem'
          variant={'icon'}
          onClick={(): void => onDownload && onDownload(item)}
          text={<FileArrowDown />}
        />
      )}
      {showShare && (
        <Button
          ariaLabel='shareItem'
          variant={'icon'}
          onClick={(): void => onShare && onShare(item)}
          text={<ShareNodes />}
        />
      )}
      {showSee && (
        <Button
          ariaLabel='seeItem'
          variant={'icon'}
          onClick={(): void => onSee && onSee(item)}
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
      {showMoreOptions && (
      <DropDown themeColor={themeColor} title={<Ellipsis />}>
      <Button
        ariaLabel='editItem'
        onClick={(): void => onEdit && onEdit(item)}
        backgroundColor={themeColor}
        text={
          <PenToSquare fill={themeColor ? '#fff' : '#9a9a9a'} size={20} />
        }
      />
      <Button
        ariaLabel='deleteItem'
        onClick={(): void => onDeleteItem && onDeleteItem(item)}
        backgroundColor={themeColor}
        text={<Xmark fill={themeColor ? '#fff' : '#9a9a9a'} size={20} />}
      />
    </DropDown>
      )} 
    </div>
  );
}
