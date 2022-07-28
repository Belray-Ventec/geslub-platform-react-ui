import debounce from 'just-debounce-it';
import React, { useMemo, useState } from 'react';
import Seeker from '../components/icons/Seeker';
import styles from './search.module.css';
import { useEffect } from 'react';

interface SearchProps {
  timeDebounce?: number;
  handleSearch: (search: string) => void;
}

export function Search({
  timeDebounce = 0,
  handleSearch,
}: SearchProps): JSX.Element {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

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
          onChange={handleChange}
          className={styles.search}
          type={'search'}
        />
      </div>
    </form>
  );
}
