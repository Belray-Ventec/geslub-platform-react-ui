import React from 'react';
import styles from './formErrorMessage.module.css';

interface FormErrorMessageProps {
  children: React.ReactNode;
  isError?: boolean;
}

export function FormErrorMessage({ children, isError }: FormErrorMessageProps) {
  return isError ? <div className={styles.error}>{children}</div> : <></>;
}
