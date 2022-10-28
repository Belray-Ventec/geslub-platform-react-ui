import React, {
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
} from 'react';
import styles from './formControl.module.css';
interface FormControlProps {
  children: React.ReactNode;
  isRequired?: boolean;
  isError?: boolean;
}

export function FormControl({
  children,
  isRequired,
  isError,
}: FormControlProps) {
  const arrayOfChildren = Children.toArray(children);

  const renderChildren = (child: ReactElement) => {
    return {
      Label: cloneElement(child as React.ReactElement, {
        isRequired: isRequired,
      }),
      InputGroup: cloneElement(child as ReactElement, {
        isError: isError,
        isRequired: isRequired,
      }),
      Input: cloneElement(child as ReactElement, {
        isError: isError,
        isRequired: isRequired,
      }),
    };
  };

  const isFunction = (data: unknown): data is (...args: unknown[]) => unknown =>
    typeof data === 'function';

  return (
    <div className={styles.form_control}>
      {arrayOfChildren.map((children) => {
        if (isValidElement(children) && isFunction(children.type)) {
          return children.type.name === 'Label'
            ? renderChildren(children)['Label']
            : children.type.name === 'InputGroup' ||
              children.type.name === 'FormErrorMessage'
            ? renderChildren(children)['InputGroup']
            : children.type.name === 'Input'
            ? renderChildren(children)['Input']
            : cloneElement(children);
        }
        return children;
      })}
    </div>
  );
}
