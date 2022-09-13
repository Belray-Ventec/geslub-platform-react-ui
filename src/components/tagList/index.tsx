import React from 'react';
import { Tag } from '../tag';
import styles from './tagList.module.css';

interface TagListProps<T> {
  data: T[];
  getRowKey: (d: T) => string | number;
  getValue: (d: T) => React.ReactNode;
  backgroundColor?: string;
  color?: string;
  rounded?: boolean;
  onClick?: (text: string) => void;
  align?: 'left' | 'right' | 'center';
}

export function TagList<T>({
  data,
  backgroundColor,
  color,
  rounded,
  onClick,
  align = 'center',
  getValue,
  getRowKey,
}: TagListProps<T>): JSX.Element {
  const alignProp = () => {
    if (align === 'left') {
      return 'flex-start';
    }
    if (align === 'right') {
      return 'flex-end';
    }
    return 'center';
  };

  return (
    <div
      className={styles.tag_list_container}
      style={{ justifyContent: `${alignProp()}` }}
    >
      {data.map(
        (item): JSX.Element => (
          <Tag
            rounded={rounded}
            color={color}
            backgroundColor={backgroundColor}
            key={getRowKey(item)}
            onClick={() => onClick && onClick('sadas')}
          >
            {getValue(item)}
          </Tag>
        )
      )}
    </div>
  );
}
