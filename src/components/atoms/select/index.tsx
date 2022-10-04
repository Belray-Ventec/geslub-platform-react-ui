import React, { useEffect, useState } from 'react';
import { TagList } from '../../molecules/tagList';
import { Icon } from '../icon';
import { Paragraph } from '../paragraph';
import styles from './select.module.css';

interface SelectProps {
  options: OptionProps[];
  onChange?: (option: OptionProps[] | OptionProps | null) => void;
  isInline?: boolean;
  multiple?: boolean;
}

interface OptionProps {
  label: string;
  value: string | number;
}

export function Select({ options, isInline, onChange, multiple }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(options);

  const [selectedValue, setSelectedValue] = useState<
    OptionProps | OptionProps[] | null
  >(multiple ? [] : null);

  const handleSearch = (term: string) => {
    const filtered = options.filter(({ label }) => {
      return String(label).toLowerCase().includes(term.toLowerCase());
    });
    setFilteredOptions(filtered);
  };

  const handleOptionClick = (label: string, value: string | number) => {
    if (multiple) {
      if (
        (selectedValue as OptionProps[]).find((item) => item.value === value)
      ) {
        const filtered = (selectedValue as OptionProps[]).filter(
          (item) => item.value !== value
        );
        setSelectedValue(filtered);
      } else {
        setSelectedValue([
          ...(selectedValue as OptionProps[]),
          { label, value },
        ]);
      }
    } else {
      setSelectedValue({ label, value });
    }
  };

  const handleRemoveTag = (label: string) => {
    const filtered = (selectedValue as OptionProps[]).filter(
      (item) => item.label !== label
    );
    setSelectedValue([...filtered]);
  };

  useEffect(() => {
    onChange && onChange(selectedValue);
    setFilteredOptions(options);
  }, [selectedValue]);

  useEffect(() => {
    setFilteredOptions(options);
  }, [options]);

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        role={'button'}
        className={[
          styles.container,
          isInline ? styles.container_inline : undefined,
        ].join(' ')}
      >
        <div className={[styles.select].join(' ')}>
          <div className={styles.input_container}>
            {isOpen ? (
              <input
                autoFocus
                onChange={(event) => handleSearch(event.target.value)}
                className={styles.search_input}
              ></input>
            ) : multiple ? (
              (selectedValue as OptionProps[])?.length > 0 ? (
                <TagList
                  data={selectedValue as OptionProps[]}
                  getValue={(option) => option.label}
                  getRowKey={(option) => option.value}
                  onClick={(label) => handleRemoveTag(label)}
                />
              ) : (
                <Paragraph className={styles.nowrap} size="sm">
                  Seleccione
                </Paragraph>
              )
            ) : (
              <Paragraph className={styles.nowrap} size="sm">
                {(selectedValue as OptionProps)?.label ?? 'Seleccione'}
              </Paragraph>
            )}
          </div>
          <div className={styles.arrow_container}>
            <Icon icon="AngleDown" color="#d82f11" size={20} />
          </div>
        </div>
        {isOpen && (
          <div className={[styles.options_container].join(' ')}>
            {filteredOptions.map(({ label, value }) => (
              <div
                onClick={() => handleOptionClick(label, value)}
                key={value}
                className={styles.option}
              >
                <Paragraph className={styles.nowrap} as="span" size="xs">
                  {label}
                </Paragraph>
              </div>
            ))}
          </div>
        )}
      </div>
      {isOpen && (
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={styles.overlay}
        ></div>
      )}
    </>
  );
}

// function MultiSelectTags() {
//     return (
//         <div className={styles.multitags_container}>

//         </div>
//     )
// }
