import React, { useEffect, useState } from 'react';
import usePaginate from '../../hooks/usePaginate';
import { Button } from '../button';
import DropDown from '../dropDown';
import Add from '../icons/Add';
import Ellipsis from '../icons/Ellipsis';
import ShareNodes from '../icons/ShareNodes';
import Xmark from '../icons/Xmark';
import PenToSquare from '../icons/PenToSquare';
import '../../../public/index.css';

import styles from './table.module.css';
import Paginator from '../paginator';
import { Sort } from '../sort';
import { Icon } from '../icon';

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
  showAdminOptions?: boolean;
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
  showAdminOptions?: boolean;
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
  showAdminOptions,
}: TableProps<T>): JSX.Element {
  const [lastSortedColumn, setLastSortedColumn] = useState('');
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
  };

  return (
    <>
      {showHeaderButtons && (
        <div className={styles.control}>
          <Button
            ariaLabel="add"
            primary
            backgroundColor={themeColor ? themeColor : '#fff'}
            variant="text"
            text={<Add size={20} fill={themeColor ? '#fff' : '#9a9a9a'} />}
            onClick={() => add && add()}
          />
          <Button
            ariaLabel="share"
            primary
            backgroundColor={themeColor ? themeColor : '#fff'}
            variant="text"
            text={
              <ShareNodes size={20} fill={themeColor ? '#fff' : '#9a9a9a'} />
            }
            onClick={() => share && share()}
          />
          <Button
            ariaLabel="delete"
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
                  ? { backgroundColor: themeColor, color: '#fff' }
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
                  <Sort
                    lastSortedColumn={lastSortedColumn}
                    onSorted={(column) => setLastSortedColumn(column)}
                    themeColor={themeColor}
                    label={label}
                    data={stateData}
                    getValue={getValue}
                    onSort={(data) => handleSort(data)}
                  />
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
                  {columns.map(({ getValue }, idx) => (
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
                      showAdminOptions={showAdminOptions}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  className={styles.not_info_found}
                  colSpan={actions ? columns.length + 1 : columns.length}
                >
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
  showAdminOptions,
}: ActionsProps<T>) {
  return (
    <div className={styles.actions}>
      {showInfo && (
        <Icon
          ariaLabel="infoItem"
          size={30}
          onClick={() => onInfo && onInfo(item)}
          icon={'Info'}
        />
      )}
      {showDownload && (
        <Icon
          ariaLabel="downloadItem"
          color="#9a9a9a"
          size={30}
          onClick={() => onDownload && onDownload(item)}
          icon={'FileArrowDown'}
        />
      )}
      {showShare && (
        <Icon
          ariaLabel="shareItem"
          color="#9a9a9a"
          size={30}
          onClick={() => onShare && onShare(item)}
          icon={'ShareNodes'}
        />
      )}
      {showSee && (
        <Icon
          ariaLabel="seeItem"
          color="#9a9a9a"
          size={30}
          onClick={() => onSee && onSee(item)}
          icon={'Eye'}
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
      {showAdminOptions && (
        <DropDown themeColor={themeColor} title={<Ellipsis />}>
          <Button
            ariaLabel="editItem"
            onClick={(): void => onEdit && onEdit(item)}
            backgroundColor={themeColor}
            text={
              <PenToSquare fill={themeColor ? '#fff' : '#9a9a9a'} size={20} />
            }
          />
          <Button
            ariaLabel="deleteItem"
            onClick={(): void => onDeleteItem && onDeleteItem(item)}
            backgroundColor={themeColor}
            text={<Xmark fill={themeColor ? '#fff' : '#9a9a9a'} size={20} />}
          />
        </DropDown>
      )}
    </div>
  );
}
