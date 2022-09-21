import React, { useState } from 'react';
import AngleLeft from '../icons/AngleLeft';
import styles from './drawer.module.css';
import Gp from '../icons/Gp';
import AngleDown from '../icons/AngleDown';
import PropTypes from 'prop-types';
import useWindowSize from '../../hooks/useWindowSize';
import { Icon } from '../icon';

interface DrawerProps {
  title?: React.ReactNode;
  logo?: string;
  themeColor?: string;
  children: React.ReactNode;
  isOpen: boolean;
  onStateChange: () => void;
}

interface DrawerItemProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  isOpen: boolean;
  isSubOpen?: boolean;
}

export function Drawer({
  logo,
  title,
  themeColor,
  isOpen,
  onStateChange,
  children,
}: DrawerProps) {
  const { width } = useWindowSize();

  if (width && width > 768) {
    return (
      <div
        role={'navigation'}
        style={{ backgroundColor: themeColor ? themeColor : '#04111C' }}
        className={[styles.drawer, isOpen && styles.drawer_expanded].join(' ')}
      >
        <div className={styles.drawer_header}>
          {logo ? <img src={logo} width={50} height={50} alt="logo" /> : <Gp />}
          {isOpen && !title ? (
            <span className={styles.logo}>
              <span className={styles.bold}>Ges</span>lub Platform
            </span>
          ) : (
            isOpen && <span className={styles.logo}>{title}</span>
          )}
          <div className={styles.showDrawer}>
            <button
              aria-label="show drawer"
              style={{
                backgroundColor: themeColor ? themeColor : '',
                filter: 'brightness(1.2)',
              }}
              className={[
                styles.show_drawer_button,
                isOpen ? styles.show_drawer_button_open : '',
              ].join(' ')}
              onClick={() => onStateChange()}
            >
              <AngleLeft color="#fff" size={20} />
            </button>
          </div>
        </div>
        <div className={styles.drawer_body}>
          <nav className={styles.nav}>{children}</nav>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        role={'navigation'}
        style={{
          backgroundColor: themeColor ? themeColor : '',
          position: isOpen ? 'fixed' : 'relative',
        }}
        className={styles.drawer_responsive}
      >
        <button
          style={{ backgroundColor: themeColor ? themeColor : '' }}
          onClick={() => onStateChange()}
          className={styles.button_responsive}
        >
          <Icon icon="Bars" size={20} color={'#fff'} />
        </button>
        <span className={styles.logo_container}>
          {logo ? (
            <img alt={String(title)} src={logo} width={30} height={30} />
          ) : (
            <Gp size={30} />
          )}
          {title ? (
            <span className={styles.logo_responsive}>{title}</span>
          ) : (
            <span className={styles.logo_responsive}>Geslub Platform</span>
          )}
        </span>
        <div className={styles.fix_nav_responsive}></div>
      </div>
      {isOpen && (
        <nav
          style={{ backgroundColor: themeColor ? themeColor : '' }}
          className={styles.nav_responsive}
        >
          {children}
        </nav>
      )}
    </>
  );
}

Drawer.prototypes = {
  title: PropTypes.node,
  logo: PropTypes.string,
  themeColor: PropTypes.string,
};

export function DrawerItem({ children, icon, isOpen }: DrawerItemProps) {
  return (
    <span title={children as string} className={styles.drawer_item}>
      <span
        className={styles.itemText}
        style={{ justifyContent: !isOpen ? 'center' : '' }}
      >
        {icon ? (
          <i>{icon}</i>
        ) : (
          <Icon icon="CaretRight" color="#fff" size={25} />
        )}
        {isOpen && <span className={styles.drawer_item_show}>{children}</span>}
      </span>
    </span>
  );
}

interface DrawerSubItemProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  title: string;
  isOpen: boolean;
}

export function DrawerSubItem({
  children,
  icon,
  title,
  isOpen,
}: DrawerSubItemProps) {
  const [isSubOpen, setIsSubOpen] = useState(false);

  return (
    <div className={styles.drawer_subitem}>
      <button
        title={title}
        onClick={() => setIsSubOpen(!isSubOpen)}
        className={[
          styles.drawer_item,
          isSubOpen ? styles.drawer_item_open : '',
        ].join(' ')}
      >
        <span
          className={styles.subItemText}
          style={{ justifyContent: !isOpen ? 'center' : 'flex-start' }}
        >
          <span className={[!isOpen ? styles.icon : ''].join(' ')}>
            {icon ? icon : <Icon icon="CaretRight" color="#fff" size={25} />}
          </span>
          {isOpen && (
            <>
              <span className={styles.drawer_item_show}>{title}</span>
              <span
                className={[
                  isSubOpen ? styles.subitem_arrow_down : '',
                  styles.arrowSubItem,
                ].join(' ')}
              >
                <AngleDown color="#fff" size={20} />
              </span>
            </>
          )}
        </span>
      </button>
      {isSubOpen && (
        <div className={styles.drawer_subitem_list}>{children}</div>
      )}
    </div>
  );
}
