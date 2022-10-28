import { useEffect, useState } from 'react';
import { UseSearchOptionsProps } from '../types';

export default function useSearchOptions({
  options,
  onChange,
  selectedValue,
}: UseSearchOptionsProps) {
  const [filteredOptions, setFilteredOptions] = useState(options);

  const handleSearch = (term: string) => {
    const filtered = options.filter(({ label }) => {
      return String(label).toLowerCase().includes(term.toLowerCase());
    });
    setFilteredOptions(filtered);
  };

  useEffect(() => {
    onChange && onChange(selectedValue);
    setFilteredOptions(options);
  }, [selectedValue]);

  return {
    handleSearch,
    filteredOptions,
  };
}
