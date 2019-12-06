import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import styles from './CheckoutSummary.module.scss';

const CheckoutSummary = (props) => {
    return (
        <div className={styles.CheckoutSummary}>
            <h1>We hope it taste well !!</h1>
            <div style={{ width: '100%', height: '300px', margin: 'auto' }}> 
                 <Burger ingredients={props.ingredients}></Burger>
            </div>
            <Button
             clicked={props.checkoutCancelled}
             btnType="Danger">CANCEL</Button>
            <Button
             clicked={props.checkoutContinued}             
             btnType="Success">CONTINUE</Button>
        </div>
    );
}
 
export default CheckoutSummary;