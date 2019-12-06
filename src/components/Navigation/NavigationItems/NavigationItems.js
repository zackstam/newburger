import React from 'react';
import styles from './NavigationItems.module.scss';
import NavigationItem from './Navigationitem/NavigationItem';

const NavigationItems = () => {
    return (
        <ul className={styles.NavigationItems}>
            <NavigationItem  link="/" active exact>Burger Builder</NavigationItem>  
            <NavigationItem link="/orders">Orders</NavigationItem>  

        </ul>
    );
}
 
export default NavigationItems;