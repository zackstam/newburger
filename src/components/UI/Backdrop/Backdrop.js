import React from 'react';
import styles from './Backdrop.module.scss';

const Backdrop = (props) => {
    return (
        props.show ? <div onClick={props.clicked} className={styles.Backdrop}></div> : null
    );
}
 
export default Backdrop;