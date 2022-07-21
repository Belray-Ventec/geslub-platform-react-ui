import React, { ReactNode, useState } from 'react';
import * as styles from './dropDown.module.css';
import { Button } from '../button';

interface DropDownProps {
  title: string | JSX.Element;
  children: ReactNode;
  themeColor: string;
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
      <div onClick={(): void => setShow(!show)} className={styles.bel_drop_down}>
        <span>{title}</span>
        <div
          className={
            !show ? styles.bel_drop_down_content : styles.bel_drop_down_content_hover
          }
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.bel_drop_down_container}>
      <div
        onClick={(): void => setShow(!show)}
        className={styles.bel_drop_down_responsive}
      >
        <Button
          backgroundColor={themeColor ? themeColor : '#34495e'}
          primary
          text={title}
        ></Button>
      </div>
      <div
        className={!show ? styles.bel_drop_down_content : styles.bel_drop_down_content_hover}
      >
        {children}
      </div>
    </div>
  );
}
