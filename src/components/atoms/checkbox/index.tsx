import styles from './checkbox.module.css';
import React, { InputHTMLAttributes } from 'react';
import { Paragraph } from '../paragraph';

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
}

export function CheckBox({ children, className, ...props }: CheckBoxProps) {
  return (
    <label className={styles.checkbox}>
      <input
        className={[className, styles.inputcheck].join(' ')}
        type="checkbox"
        {...props}
      />
      <span className={styles.checkContainer}></span>
      {children && <Paragraph size="xs">{children}</Paragraph>}
    </label>
  );
}
