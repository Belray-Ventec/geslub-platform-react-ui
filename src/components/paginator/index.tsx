import React from 'react';
import { StatePaginatorProps } from '../../hooks/usePaginate';
import AngleLeft from '../icons/AngleLeft';
import styles from './paginator.module.css';

export interface PaginatorProps<T> {
  paginator: StatePaginatorProps<T>;
  showPages?: boolean;
  next: () => void;
  previous: () => void;
  goPage: (page: number) => void;
  themeColor: string | undefined;
}

export default function Paginator<T>({
  paginator,
  next,
  previous,
  goPage,
  showPages,
  themeColor,
}: PaginatorProps<T>): JSX.Element {
  const firstElement = Math.ceil(
    (paginator.totalItems / paginator.totalPages) * paginator.previousPage + 1
  );
  const lastElement = Math.ceil(
    (paginator.totalItems / paginator.totalPages) * paginator.page
  );

  return (
    <div className={styles.container_paginator}>
      <div className={styles.container_pages}>
        {showPages && (
          <div className={styles.pages}>
            {Array.from(Array(paginator.totalPages).keys()).map((item) => (
              <button
                style={
                  themeColor
                    ? { backgroundColor: themeColor, color: '#fff' }
                    : {}
                }
                onClick={(): void => goPage(item + 1)}
                className={`${styles.page_link} ${
                  paginator.page === item + 1
                    ? `${styles.page_link_active}`
                    : ''
                }`}
                key={item}
              >
                {item + 1}
              </button>
            ))}
          </div>
        )}
        <div aria-label='previous' onClick={(): void => previous()} className={styles.previous}>
          <button className={styles.previous_text}>
            <AngleLeft />
          </button>
        </div>
        <div aria-label='next'
          onClick={(): void => {
            next();
          }}
          className={styles.next}
        >
          <button className={styles.next_text}>
            <AngleLeft />
          </button>
        </div>
      </div>
      <span>
        Mostrando {paginator.totalPages > 0 ? firstElement : '0'} a{' '}
        {paginator.totalPages > 0 ? lastElement : '0'} de {paginator.totalItems}{' '}
        registros
      </span>
    </div>
  );
}
