import styles from './accordionItem.module.css';

import React, { useState } from 'react';
import { Icon } from '../icon';
import { useEffect } from 'react';

interface AccordionItemProps {
  children: React.ReactNode;
  title: string;
  isExpanded?: boolean;
  toggle?: (title: string) => void;
}

export function AccordionItem({
  children,
  title,
  toggle,
  isExpanded: propIsExpanded,
}: AccordionItemProps) {
  const [isExpanded, setIsExpanded] = useState<boolean | undefined>(false);

  useEffect(() => {
    setIsExpanded(propIsExpanded);
  }, [propIsExpanded]);

  const handleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <div className={styles.accordion_item}>
      <button
        className={styles.accordion_button}
        type="button"
        aria-expanded={isExpanded}
        onClick={() => {
          toggle ? toggle(title) : handleExpanded();
        }}
      >
        <div>{title}</div>
        <Icon
          className={isExpanded ? styles.angledown : undefined}
          size={20}
          icon="AngleUp"
          ariaLabel="Expand"
        />
      </button>
      <div
        className={[
          styles.accordion_content,
          isExpanded ? styles.expanded : undefined,
        ].join(' ')}
      >
        {children}
      </div>
    </div>
  );
}
