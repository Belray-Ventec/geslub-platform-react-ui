import React, { ReactNode, useState } from 'react';
import styles from './dropDown.module.css';
import { Button } from '../button';

interface DropDownProps {
  title: string | JSX.Element;
  children: ReactNode;
  themeColor: string | undefined;
  onlyResponsive?: boolean;
}

export default function DropDown({
  title,
  children,
  onlyResponsive,
  themeColor,
}: DropDownProps): JSX.Element {
  const [show, setShow] = useState(false);

  if (!onlyResponsive) {
    return (
      <div
        onClick={(): void => setShow(!show)}
        className={styles.drop_down}
      >
        <span>{title}</span>
        <div
          className={
            !show
              ? styles.drop_down_content
              : styles.drop_down_content_hover
          }
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.drop_down_container}>
      <div
        onClick={(): void => setShow(!show)}
        className={styles.drop_down_responsive}
      >
        <Button
          backgroundColor={themeColor ? themeColor : '#34495e'}
          primary
          text={title}
        ></Button>
      </div>
      <div
        className={
          !show
            ? styles.drop_down_content
            : styles.drop_down_content_hover
        }
      >
        {children}
      </div>
    </div>
  );
}
