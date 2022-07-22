import React from 'react';
import Tag from '../tag';
import styles from './tagList.module.css';

interface TagListProps {
  data: string[];
}

export default function TagList({ data }: TagListProps): JSX.Element {
  const handleOnClickTag = (text: string): void => {
    console.log(`Clicked ${text}`);
  };

  return (
    <div className={styles.tag_list_container}>
      {data.map(
        (item: string): JSX.Element => (
          <Tag key={item} text={item} onClick={handleOnClickTag} />
        )
      )}
    </div>
  );
}
