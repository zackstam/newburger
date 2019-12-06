import React from 'react';
import styles from './Toolbar.module.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../NavigationItems/SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = (props) => {
    return (
        <header className={styles.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked}></DrawerToggle>
            <div className={styles.Logo}>
                <Logo className={styles.Logo}/>
            </div>
            <nav className={styles.DesktopOnly}>
                <NavigationItems></NavigationItems>
            </nav>
        </header>
    );
}
 
export default Toolbar;