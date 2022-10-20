import React, { Children, cloneElement } from 'react';
import { InputGroupProps } from './type';
import styles from './inputGroup.module.css';

export function InputGroup({
  children,
  size = 'md',
  ...props
}: InputGroupProps) {
  const arrayOfChildren = Children.toArray(children);
  const existAddon = arrayOfChildren.find(
    (child) =>
      React.isValidElement(child) &&
      typeof child.type !== 'string' &&
      child.type.name === 'InputAddon'
  );
  return (
    <div
      {...props}
      className={[
        styles.input_group,
        existAddon ? styles.input_group_addon : undefined,
      ].join(' ')}
    >
      {arrayOfChildren.map((children) =>
        cloneElement(children as React.ReactElement, { size: size })
      )}
    </div>
  );
}
