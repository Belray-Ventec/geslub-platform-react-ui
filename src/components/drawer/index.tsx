import React, { useState } from 'react'
import AngleLeft from '../icons/AngleLeft';
import styles from './drawer.module.css';
import Gp from '../icons/Gp';
import Home from '../icons/Home';

interface DrawerData {
    title: string;
    icon: React.ReactNode;
    href: string;
    items ?: {title: string, href: string, icon: React.ReactNode}[];
}

interface DrawerProps {
    children: React.ReactNode;
    data: DrawerData[];
}

export function Drawer({ children, data } : DrawerProps) {
    const [isOpen, setIsOpen] = useState(false)
  return (
        <div className={styles.container}>
        <div className={[styles.drawer, isOpen && styles.drawer_expanded].join(' ')}>
            <div className={styles.drawer_header}>
                <Gp/>
                <div className={styles.showDrawer}><button className={styles.show_drawer_button} onClick={() => setIsOpen(!isOpen)}><AngleLeft size={20} /></button></div>
            </div>
            <div className={styles.drawer_body}>
                <nav className={styles.nav}>
                    {
                        data.map(item => {
                            return (
                                item.items ? <DrawerSubItem isOpen={isOpen} icon={item.icon} items={item.items}>{item.title}</DrawerSubItem> : <DrawerItem isOpen={isOpen} icon={item.icon} href={item.href}>{item.title}</DrawerItem>
                            )
                        })
                    } 
                </nav>
            </div>
        </div>
            {children}
        </div>
  )
}

interface DrawerItemProps {
    children: React.ReactNode;
    href: string;
    icon: React.ReactNode;
    isOpen: boolean;
}

function DrawerItem({ children, href, icon, isOpen }: DrawerItemProps) {
  return (
    <a href={href} className={styles.drawer_item}>
        { icon }
        {isOpen && <span className={styles.drawer_item_show}>{children}</span>}
    </a>
  )
}

interface DrawerSubItemProps {
    children: React.ReactNode;
    icon: React.ReactNode;
    items: {title: string, href: string, icon: React.ReactNode}[];
    isOpen: boolean;
}

function DrawerSubItem({ children, icon, items, isOpen }: DrawerSubItemProps) {
    return (
        <div className={styles.drawer_subitem}>
            <a className={styles.drawer_item}>
                <span>
                { icon }
                {isOpen && <span className={styles.drawer_item_show}>{children}</span>}
                </span>
                <span className={styles.subitem_arrow_down}><AngleLeft size={20}/></span>
            </a>
            <div className={styles.drawer_subitem_list}>
                {items.map((item, index) => (
                    <a href={item.href} className={styles.drawer_subitem_item} key={index}>
                        {item.icon}
                        <span className={styles.drawer_item_show}>{item.title}</span>
                    </a>
                ))}
            </div>
        </div>
    )
}