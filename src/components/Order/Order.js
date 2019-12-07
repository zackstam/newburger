import React from 'react';
import styles from './Order.module.scss';

const Order = (props) => {

    const ingredients = [];
    for (const ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        })
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span
        style={{ textTransform: 'capitalize', 
        display: 'inline-block',
        border: '1px solid #000' }}
        key={ig.name}>{ig.name} ({ig.amount})</span>
    })
    return (
        <div className={styles.Order}>
            <p>Ingredients : { ingredientOutput }</p>
            <p>Price : <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    );
}
 
export default Order;