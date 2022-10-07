import React, { useState } from 'react';
import { TagList } from '../../molecules/tagList';
import { Icon } from '../icon';
import { Paragraph } from '../paragraph';
import useSearchOptions from './hooks/useSearchOptions';
import useSelectValue from './hooks/useSelectValue';
import styles from './select.module.css';
import { OptionProps, SelectProps, ItemListProps } from './types';

export function Select({
  options,
  isInline,
  onChange,
  multiple,
  initialValue,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { handleOptionClick, handleRemoveTag, removeAllTags, selectedValue } =
    useSelectValue({
      multiple,
      initialValue,
    });

  const { filteredOptions, handleSearch } = useSearchOptions({
    options,
    onChange,
    selectedValue,
  });

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        role={'listbox'}
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
                <>
                  <TagList
                    minWidth="0"
                    data={selectedValue as OptionProps[]}
                    getValue={(option) => option.label}
                    getRowKey={(option) => option.value}
                    onClick={(label) => handleRemoveTag(label)}
                  />
                  <Icon
                    onClick={removeAllTags}
                    icon="CircleXmark"
                    size={25}
                    color={'#000'}
                  />
                </>
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
          <OptionsList
            filteredOptions={filteredOptions}
            handleOptionClick={handleOptionClick}
          />
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

function OptionsList({ filteredOptions, handleOptionClick }: ItemListProps) {
  return (
    <div className={[styles.options_container].join(' ')}>
      {filteredOptions.map(({ label, value }) => (
        <div
          role={'listitem'}
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
  );
}
