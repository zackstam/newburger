import React from 'react';
import Logo from '../../../Logo/Logo';
import NavigationItems from '../NavigationItems';
import styles from './SideDrawer.module.scss';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import Aux from '../../../../hoc/Aux';

const SideDrawer = (props) => {
    let attachedClasses = [styles.Close, styles.SideDrawer];
    if (props.open) {
        attachedClasses = [styles.Open, styles.SideDrawer];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}></Backdrop>
            <div className={attachedClasses.join(' ')}>
                <div className={styles.Logo}>
                    <Logo></Logo>
                </div>
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
        </Aux>

    );
}
 
export default SideDrawer;