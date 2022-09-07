import React, { useState } from 'react'
import AngleLeft from '../icons/AngleLeft';
import styles from './drawer.module.css';
import Gp from '../icons/Gp';
import AngleDown from '../icons/AngleDown';
import CaretRight from '../icons/CaretRight';

interface DrawerData {
    title: string;
    icon?: React.ReactNode;
    href: string;
    items?: { title: string, href: string, icon?: React.ReactNode }[];
}

interface DrawerProps {
    children: React.ReactNode;
    data: DrawerData[];
}

export function Drawer({ children, data }: DrawerProps) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={styles.container}>
            <div className={[styles.drawer, isOpen && styles.drawer_expanded].join(' ')}>
                <div className={styles.drawer_header}>
                    <Gp />
                    {isOpen && <span className={styles.logo}><span className={styles.bold}>Geslub</span> Platform</span>}
                    <div className={styles.showDrawer}><button className={[styles.show_drawer_button, isOpen ? styles.show_drawer_button_open : ''].join(' ')} onClick={() => setIsOpen(!isOpen)}><AngleLeft color='#fff' size={20} /></button></div>
                </div>
                <div className={styles.drawer_body}>
                    <nav className={styles.nav}>
                        {
                            data.map((item, index) => {
                                return (
                                    item.items ? <DrawerSubItem key={index} isOpen={isOpen} icon={item.icon} items={item.items}>{item.title}</DrawerSubItem> : <DrawerItem key={index} isOpen={isOpen} icon={item.icon} href={item.href}>{item.title}</DrawerItem>
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
    icon?: React.ReactNode;
    isOpen: boolean;
}

function DrawerItem({ children, href, icon, isOpen }: DrawerItemProps) {
    return (
        <a href={href} className={styles.drawer_item}>
            {icon ? icon : <CaretRight />}
            {isOpen && <span className={styles.drawer_item_show}>{children}</span>}
        </a>
    )
}

interface DrawerSubItemProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
    items: { title: string, href: string, icon?: React.ReactNode }[];
    isOpen: boolean;
}

function DrawerSubItem({ children, icon, items, isOpen }: DrawerSubItemProps) {

    const [isSubOpen, setIsSubOpen] = useState(false)

    return (
        <div className={styles.drawer_subitem}>
            <a onClick={() => setIsSubOpen(!isSubOpen)} className={styles.drawer_item}>
                <span className={styles.subItemText}>
                    {icon ? icon : <CaretRight />}
                    {isOpen && <><span className={styles.drawer_item_show}>{children}</span><span className={[isSubOpen ? styles.subitem_arrow_down : ''].join(' ')}><AngleDown color='#fff' size={20} />
                    </span></>}

                </span>
            </a>
            {
                isSubOpen && <div className={styles.drawer_subitem_list}>
                    {items.map((item, index) => (
                        <a href={item.href} className={styles.drawer_subitem_item} key={index}>
                            {item.icon ? item.icon : <CaretRight size={25} />}
                            {isOpen && <span className={styles.drawer_item_show}>{item.title}</span>}
                        </a>
                    ))}
                </div>
            }
        </div>
    )
}