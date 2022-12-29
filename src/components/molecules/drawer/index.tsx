import React, { useState } from 'react';
import AngleLeft from '../../../assets/icons/AngleLeft';
import styles from './drawer.module.css';
import Gp from '../../../assets/icons/Gp';
import AngleDown from '../../../assets/icons/AngleDown';
import PropTypes from 'prop-types';
import useWindowSize from '../../../hooks/useWindowSize';
import { Icon } from '../../atoms/icon';
import { DrawerItemProps, DrawerProps, DrawerSubItemProps } from './types';
import { stylesInline } from './const';
import { useEffect } from 'react';

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
      <>
        <div
          role={'navigation'}
          style={stylesInline(themeColor).drawer}
          className={[styles.drawer, isOpen && styles.drawer_expanded].join(
            ' '
          )}
        >
          <div className={styles.drawer_header}>
            {logo ? (
              <img src={logo} width={50} height={50} alt="logo" />
            ) : (
              <Gp />
            )}
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
                style={stylesInline(themeColor).showDrawer}
                className={[
                  styles.show_drawer_button,
                  isOpen ? styles.show_drawer_button_open : undefined,
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
        {isOpen && (
          <div onClick={onStateChange} className={styles.drawer_overlay}></div>
        )}
      </>
    );
  }

  return (
    <>
      <div
        role={'navigation'}
        style={{
          backgroundColor: themeColor ? themeColor : undefined,
          position: isOpen ? 'fixed' : 'relative',
        }}
        className={styles.drawer_responsive}
      >
        <button
          style={stylesInline(themeColor).button}
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
          style={stylesInline(themeColor).button}
          className={styles.nav_responsive}
        >
          {children}
        </nav>
      )}
    </>
  );
}

Drawer.propTypes = {
  title: PropTypes.node,
  logo: PropTypes.string,
  themeColor: PropTypes.string,
};

export function DrawerItem({
  children,
  icon,
  isOpen,
  onClick,
  isActive,
}: DrawerItemProps) {
  return (
    <span
      onClick={() => onClick && onClick()}
      title={children as string}
      className={[
        styles.drawer_item,
        isActive ? styles.isActive : undefined,
      ].join(' ')}
    >
      <span
        className={styles.itemText}
        style={{ justifyContent: !isOpen ? 'center' : undefined }}
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

export function DrawerSubItem({
  children,
  icon,
  title,
  isOpen,
  isActive,
  onStateChange,
}: DrawerSubItemProps) {
  const [isSubOpen, setIsSubOpen] = useState(false);

  useEffect(() => {
    !isOpen && setIsSubOpen(false);
  }, [isOpen]);

  return (
    <div
      className={[
        styles.drawer_subitem,
        isActive ? styles.isActive : undefined,
      ].join(' ')}
    >
      <button
        title={title}
        onClick={() => {
          !isOpen && onStateChange();
          setIsSubOpen(!isSubOpen);
        }}
        className={[
          styles.drawer_item,
          isSubOpen ? styles.drawer_item_open : undefined,
        ].join(' ')}
      >
        <span
          className={styles.subItemText}
          style={{ justifyContent: !isOpen ? 'center' : 'flex-start' }}
        >
          <span className={[!isOpen ? styles.icon : undefined].join(' ')}>
            {icon ? icon : <Icon icon="CaretRight" color="#fff" size={25} />}
          </span>
          {isOpen && (
            <>
              <span className={styles.drawer_item_show}>{title}</span>
              <span
                className={[
                  isSubOpen ? styles.subitem_arrow_down : undefined,
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
