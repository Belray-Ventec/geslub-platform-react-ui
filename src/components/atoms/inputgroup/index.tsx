import React, { Children, cloneElement } from 'react';
import { InputGroupProps } from './type';
import styles from './inputGroup.module.css';

export function InputGroup({ children, size = 'md' }: InputGroupProps) {
  const arrayOfChildren = Children.toArray(children);
  return (
    <div className={styles.input_group}>
      {arrayOfChildren.map((children) =>
        cloneElement(children as React.ReactElement, { size: size })
      )}
    </div>
  );
}
