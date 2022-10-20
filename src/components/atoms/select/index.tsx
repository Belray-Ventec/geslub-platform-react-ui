import React, { useState } from 'react';
import { Icon } from '../icon';
import { sizes, iconSizes } from './const';
import { Paragraph } from '../paragraph';
import useSearchOptions from './hooks/useSearchOptions';
import useSelectValue from './hooks/useSelectValue';
import styles from './select.module.css';
import { OptionProps, SelectProps, ItemListProps } from './types';
import { Input } from '../input';
import { InputGroup } from '../inputgroup';
import { InputAddon } from '../inputaddon';

export function Select({
  options,
  isInline,
  onChange,
  multiple,
  initialValue,
  size = 'md',
  placeholder = 'Seleccione',
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { handleOptionClick, removeAllTags, selectedValue } = useSelectValue({
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
        tabIndex={0}
        role={'listbox'}
        className={[
          styles.container,
          isInline ? styles.container_inline : undefined,
        ].join(' ')}
      >
        <div
          onClick={(e) => {
            setIsOpen(!isOpen);
            handleSearch('');
            e.stopPropagation();
          }}
          className={[styles.select, sizes[size]].join(' ')}
        >
          <div className={styles.input_container}>
            {isOpen ? (
              <InputGroup size={size}>
                <InputAddon position="left">
                  <Icon
                    color="#a9a9a9"
                    size={iconSizes[size]}
                    icon={'Seeker'}
                  />
                </InputAddon>
                <Input
                  autoFocus
                  placeholder="Buscar"
                  onClick={(e) => e.stopPropagation()}
                  onChange={(event) => handleSearch(event.target.value)}
                  variant="unstyled"
                />
              </InputGroup>
            ) : multiple ? (
              (selectedValue as OptionProps[])?.length > 0 ? (
                <>
                  <Paragraph align="left" className={styles.nowrap} size="xs">
                    {placeholder} ({(selectedValue as OptionProps[]).length})
                  </Paragraph>
                  <Icon
                    onClick={removeAllTags}
                    icon="CircleXmark"
                    size={iconSizes[size] * 0.9}
                    color={'#000'}
                  />
                </>
              ) : (
                <Paragraph align="left" className={styles.nowrap} size="xs">
                  {placeholder}
                </Paragraph>
              )
            ) : (
              <Paragraph align="left" className={styles.nowrap} size="xs">
                {(selectedValue as OptionProps)?.label ?? placeholder}
              </Paragraph>
            )}
          </div>
          <div className={styles.arrow_container}>
            <Icon icon="AngleDown" color="#d82f11" size={iconSizes[size]} />
          </div>
        </div>
        {isOpen && (
          <OptionsList
            filteredOptions={filteredOptions}
            handleOptionClick={handleOptionClick}
            selectedValue={selectedValue}
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

function OptionsList({
  filteredOptions,
  handleOptionClick,
  selectedValue,
}: ItemListProps) {
  return (
    <div className={[styles.options_container].join(' ')}>
      {filteredOptions.length > 0 ? (
        filteredOptions.map(({ label, value }) => (
          <div
            role={'listitem'}
            onClick={() => handleOptionClick(label, value)}
            key={value}
            className={styles.option}
          >
            {selectedValue && Array.isArray(selectedValue) ? (
              <>
                <Paragraph className={styles.nowrap} as="span" size="xs">
                  {label}
                </Paragraph>
                {selectedValue.find((item) => item.value === value) && (
                  <Icon color="#a9a9a9" size={15} icon="Check" />
                )}
              </>
            ) : (
              <>
                <Paragraph className={styles.nowrap} as="span" size="xs">
                  {label}
                </Paragraph>
                {selectedValue && selectedValue.value === value && (
                  <Icon color="#a9a9a9" size={15} icon="Check" />
                )}
              </>
            )}
          </div>
        ))
      ) : (
        <div role={'listitem'} className={styles.option}>
          <Paragraph
            style={{ width: '100%' }}
            align="center"
            className={styles.nowrap}
            as="span"
            size="xs"
          >
            No hay resultados
          </Paragraph>
        </div>
      )}
    </div>
  );
}
