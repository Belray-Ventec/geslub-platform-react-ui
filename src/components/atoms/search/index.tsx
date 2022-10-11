import debounce from 'just-debounce-it';
import React, { useMemo, useState } from 'react';
import Seeker from '../../../assets/icons/Seeker';
import styles from './search.module.css';
import { useEffect } from 'react';
import { SearchProps } from './types';

export function Search({
  timeDebounce = 0,
  handleSearch,
}: SearchProps): JSX.Element {
  const [search, setSearch] = useState('');

  const handleSearchDebounce = useMemo(() => {
    return debounce(() => {
      handleSearch(search);
    }, timeDebounce);
  }, [search]);

  useEffect(() => {
    handleSearchDebounce();

    return () => {
      handleSearchDebounce.cancel();
    };
  }, [search]);

  return (
    <form className={styles.search_container}>
      <div className={styles.search_input_container}>
        <span className={styles.search_icon}>
          <Seeker />
        </span>
        <input
          placeholder="Buscar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.search}
          type={'search'}
        />
      </div>
    </form>
  );
}
