import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import styles from './../ContactData/ContactData.module.scss'
import Spinner from '../../../components/UI/Spinner/Spinner';

import axios from './../../../axios-orders';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props)
        console.log(this.props.ingredients);
        this.setState({ loading: true });
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Muhammad Zakuan',
                address: {
                    street: 'Jl Pasir no 35 Gamping Sleman',
                    zipCode: '51171',
                    country: 'Indonesia'
                },
                email: 'zackstam@gmail.com'
            },
            deliveryMethod: 'fastest'
        };
        
        axios.post('/orders.json', order)
        .then(response => {
            console.log(response);
            this.setState({ loading: false });
            this.props.history.push('/');
        })
        .catch(error => {
            this.setState({ loading: false });
        });
    }

    render() { 
        let form = (
            <form>
                <input className={styles.Input} type="text" name="name" placeholder="Your Name"/>
                <input className={styles.Input} type="email" name="email" placeholder="Email"/>
                <input className={styles.Input} type="text" name="street" placeholder="Street"/>
                <input className={styles.Input} type="text" name="postal" placeholder="Kode Pos"/>
                <Button btnType="success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner/>
        }
        return (
            <div className={styles.ContactData}>
                <h4>Enter Yout contact Data</h4>
                {form}
            </div>
        );
    }
}
 
export default ContactData;