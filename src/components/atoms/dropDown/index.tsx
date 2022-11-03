import React, { ReactNode, useState } from 'react';
import styles from './dropDown.module.css';
import { Button } from '../button';
import { HTMLAttributes } from 'react';

interface DropDownProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title: string | JSX.Element;
  children: ReactNode;
  themeColor: string | undefined;
  position: 'left' | 'right';
  onlyResponsive?: boolean;
}

export default function DropDown({
  title,
  children,
  onlyResponsive,
  themeColor,
  position = 'left',
  ...props
}: DropDownProps): JSX.Element {
  const [show, setShow] = useState(false);

  if (!onlyResponsive) {
    return (
      <div
        aria-expanded={show}
        onClick={(e) => {
          e.stopPropagation();
          setShow(!show);
        }}
        className={styles.drop_down}
        {...props}
      >
        <span>{title}</span>
        <div
          className={[
            !show ? styles.drop_down_content : styles.drop_down_content_hover,
            position === 'left' ? styles.left : styles.right,
          ].join('')}
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
        <Button backgroundColor={themeColor ? themeColor : '#34495e'} primary>
          {title}
        </Button>
      </div>
      <div
        className={
          !show ? styles.drop_down_content : styles.drop_down_content_hover
        }
      >
        {children}
      </div>
    </div>
  );
}
