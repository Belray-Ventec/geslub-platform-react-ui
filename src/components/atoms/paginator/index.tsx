import React, { useEffect, useState } from 'react';
import AngleLeft from '../../../assets/icons/AngleLeft';
import styles from './paginator.module.css';
import {
  dotsInitial,
  dotsLeft,
  dotsRight,
  firstPage,
  lastPage,
  stylesInline,
} from './const';
import { PaginatorProps } from './types';
import { Paragraph } from '../paragraph';

export default function Paginator<T>({
  paginator,
  next,
  previous,
  goPage,
  showPages,
  themeColor,
}: PaginatorProps<T>): JSX.Element {
  const [pagesList, setPageList] = useState(
    Array.from(Array(paginator.totalPages).keys())
  );
  const [arrOfPages, setArrOfPages] = useState<(string | number)[]>([]);

  const handlePage = (item: number | string) => {
    if (item === '... ') {
      goPage(paginator.page - 3);
    } else if (item === ' ...') {
      goPage(paginator.page + 3);
    } else if (item === '...') {
      goPage(paginator.page + 3);
    } else {
      goPage(Number(item) + 1);
    }
  };

  useEffect(() => {
    let tempArrPages = [...arrOfPages];

    if (pagesList.length < 6) {
      tempArrPages = pagesList;
    } else if (paginator.page >= 1 && paginator.page <= 3) {
      tempArrPages = [
        ...pagesList.slice(0, 4),
        dotsInitial,
        pagesList.length - 1,
      ];
    } else if (paginator.page === 4) {
      const sliced = pagesList.slice(0, 5);
      tempArrPages = [...sliced, dotsInitial, pagesList.length - 1];
    } else if (paginator.page > 4 && paginator.page < pagesList.length - 2) {
      const sliced1 = pagesList.slice(paginator.page - 2, paginator.page);
      const sliced2 = pagesList.slice(paginator.page, paginator.page + 1);
      tempArrPages = [
        0,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        pagesList.length - 1,
      ];
    } else if (paginator.page > pagesList.length - 3) {
      const sliced = pagesList.slice(pagesList.length - 4);
      tempArrPages = [0, dotsLeft, ...sliced];
    }

    setArrOfPages(tempArrPages);
  }, [paginator.page, pagesList]);

  useEffect(() => {
    setPageList(Array.from(Array(paginator.totalPages).keys()));
  }, [paginator.totalPages]);

  return (
    <div className={styles.container_paginator}>
      <div className={styles.container_pages}>
        {showPages && (
          <div className={styles.pages}>
            {arrOfPages.map((item) => (
              <button
                style={stylesInline(themeColor).button}
                onClick={(): void => handlePage(item)}
                className={`${styles.page_link} ${
                  paginator.page === Number(item) + 1
                    ? `${styles.page_link_active}`
                    : undefined
                }`}
                key={item}
              >
                {typeof item === 'string' ? item : item + 1}
              </button>
            ))}
          </div>
        )}
        <div className={styles.arrows_container}>
          <button
            aria-label="previous"
            onClick={(): void => previous()}
            className={[
              styles.previous,
              styles.previous_text,
              paginator.totalItems > paginator.itemsPerPage
                ? styles.active
                : undefined,
            ].join(' ')}
          >
            <AngleLeft />
            <span className={styles.visually_hidden}>previous</span>
          </button>
          <button
            aria-label="next"
            onClick={(): void => {
              next();
            }}
            className={[
              styles.next,
              styles.next_text,
              paginator.totalItems > paginator.itemsPerPage
                ? styles.active
                : undefined,
            ].join(' ')}
          >
            <AngleLeft />
            <span className={styles.visually_hidden}>next</span>
          </button>
        </div>
      </div>
      <Paragraph size="xs">
        Mostrando {paginator.totalPages > 0 ? firstPage(paginator) : '0'} a{' '}
        {paginator.totalPages > 0 ? lastPage(paginator) : '0'} de{' '}
        {paginator.totalItems} registros
      </Paragraph>
    </div>
  );
}
