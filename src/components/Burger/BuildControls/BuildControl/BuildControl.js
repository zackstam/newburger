import React from 'react';
import styles from './BuildControl.module.scss';

const BuildControl = (props) => {
    return (
        <div className={styles.BuildControl}>
            <div className={styles.label}>{props.label}</div>
            <button 
                className={styles.Less} 
                onClick={props.removed} 
                disabled={props.disabled}>Less</button>
            <button className={styles.More} onClick={props.added}>More</button>
        </div>
    );
}
 
export default BuildControl;