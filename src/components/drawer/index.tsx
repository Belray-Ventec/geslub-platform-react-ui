import React, { useState } from 'react';
import AngleLeft from '../icons/AngleLeft';
import styles from './drawer.module.css';
import Gp from '../icons/Gp';
import AngleDown from '../icons/AngleDown';
import { useEffect } from 'react';
import { iconsType, Icon } from '../icon';
import PropTypes from 'prop-types';
import useWindowSize from '../../hooks/useWindowSize';

interface DrawerData {
  label: string;
  icon?: React.ReactNode;
  to?: string;
  sub?: { label: string; to: string; icon?: React.ReactNode }[];
}

interface DrawerProps {
  data: DrawerData[];
  title: React.ReactNode;
  logo?: string;
  themeColor?: string;
}

interface DrawerItemProps {
  children: React.ReactNode;
  to?: string;
  icon?: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Drawer({ data, logo, title, themeColor }: DrawerProps) {
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

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
              onClick={() => setIsOpen(!isOpen)}
            >
              <AngleLeft color="#fff" size={20} />
            </button>
          </div>
        </div>
        <div className={styles.drawer_body}>
          <nav className={styles.nav}>
            {data.map((item, index) => {
              return item.sub ? (
                <DrawerSubItem
                  setIsOpen={setIsOpen}
                  key={index}
                  isOpen={isOpen}
                  icon={item.icon}
                  sub={item.sub}
                >
                  {item.label}
                </DrawerSubItem>
              ) : (
                <DrawerItem
                  setIsOpen={setIsOpen}
                  key={index}
                  isOpen={isOpen}
                  icon={item.icon}
                  to={item.to}
                >
                  {item.label}
                </DrawerItem>
              );
            })}
          </nav>
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
          onClick={() => setIsOpen(!isOpen)}
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
          {data.map((item) =>
            item.sub ? (
              <DrawerSubItem
                key={item.label}
                setIsOpen={setIsOpen}
                isOpen={true}
                icon={item.icon}
                sub={item.sub}
              >
                {item.label}
              </DrawerSubItem>
            ) : (
              <DrawerItem
                key={item.label}
                setIsOpen={setIsOpen}
                isOpen={true}
                icon={item.icon}
                to={item.to}
              >
                {item.label}
              </DrawerItem>
            )
          )}
        </nav>
      )}
    </>
  );
}

Drawer.prototypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.element,
      to: PropTypes.string,
      sub: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          to: PropTypes.string.isRequired,
          icon: PropTypes.element,
        })
      ),
    })
  ).isRequired,
  title: PropTypes.node,
  logo: PropTypes.string,
  themeColor: PropTypes.string,
};

function DrawerItem({
  children,
  to,
  icon,
  isOpen,
  setIsOpen,
}: DrawerItemProps) {
  return (
    <a
      onClick={() => setIsOpen(false)}
      title={children as string}
      href={to}
      className={styles.drawer_item}
    >
      <span
        className={styles.itemText}
        style={{ justifyContent: !isOpen ? 'center' : '' }}
      >
        {icon ? (
          <Icon icon={icon as iconsType} size={25} />
        ) : (
          <Icon icon="CaretRight" color="#fff" size={25} />
        )}
        {isOpen && <span className={styles.drawer_item_show}>{children}</span>}
      </span>
    </a>
  );
}

interface DrawerSubItemProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  sub: { label: string; to: string; icon?: React.ReactNode }[];
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function DrawerSubItem({
  children,
  icon,
  sub,
  isOpen,
  setIsOpen,
}: DrawerSubItemProps) {
  const [isSubOpen, setIsSubOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsSubOpen(false);
    }
  }, [isOpen]);

  return (
    <div className={styles.drawer_subitem}>
      <a
        title={children as string}
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
              <span className={styles.drawer_item_show}>{children}</span>
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
      </a>
      {isSubOpen && (
        <div className={styles.drawer_subitem_list}>
          {sub.map((item, index) => (
            <a
              onClick={() => setIsOpen(false)}
              title={item.label}
              href={item.to}
              className={styles.drawer_subitem_item}
              key={index}
            >
              {item.icon ? (
                item.icon
              ) : (
                <Icon color="#fff" icon="CaretRight" size={25} />
              )}
              {isOpen && (
                <span className={styles.drawer_item_show}>{item.label}</span>
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
