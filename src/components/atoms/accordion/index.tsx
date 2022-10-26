import React, { Children, cloneElement, useState } from 'react';
import styles from './accordion.module.css';
interface AccordionProps {
  children: React.ReactNode;
  allowToggle?: boolean;
}

export function Accordion({ children, allowToggle }: AccordionProps) {
  const [openKey, setOpenKey] = useState<string | null>();

  const handleToggle = (key: string) => {
    setOpenKey(openKey !== key ? key : null);
  };

  const arrayOfChildren = Children.toArray(children);
  if (!allowToggle) {
    return (
      <div className={styles.accordion}>
        {arrayOfChildren.map((children) =>
          cloneElement(children as React.ReactElement, {
            toggle: handleToggle,
            isExpanded:
              openKey === (children as React.ReactElement).props.title,
          })
        )}
      </div>
    );
  }
  return <div className={styles.accordion}>{children}</div>;
}
