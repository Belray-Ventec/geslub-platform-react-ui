import React, { Children, cloneElement } from 'react';
import { InputGroupProps } from './type';
import styles from './inputGroup.module.css';

export function InputGroup({
  children,
  size = 'md',
  isError,
  isRequired,
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
        React.isValidElement(children) &&
        typeof children.type !== 'string' &&
        children.type.name === 'Input'
          ? cloneElement(children as React.ReactElement, {
              size: size,
              isError: isError,
              isRequired: isRequired,
            })
          : (React.isValidElement(children) &&
              typeof children.type !== 'string' &&
              children.type.name === 'InputAddon') ||
            (React.isValidElement(children) &&
              typeof children.type !== 'string' &&
              children.type.name === 'InputElement')
          ? cloneElement(children as React.ReactElement, {
              size: size,
            })
          : cloneElement(children as React.ReactElement)
      )}
    </div>
  );
}
