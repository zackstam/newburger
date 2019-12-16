import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import styles from './../ContactData/ContactData.module.scss'
import Spinner from '../../../components/UI/Spinner/Spinner';
import  { connect } from 'react-redux';
import axios from './../../../axios-orders';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../../store/actions/index';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: 'zakuan',
                validation: {
                    required: true
                },
                valid: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Street Address'
                },
                value: 'Kertijayan gang 13',
                validation: {
                    required: true
                },
                valid: false

            },
            zipcode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Zip Code'
                },
                value: '51171',
                validation: {
                    required: true
                },
                valid: false,
                minLength: 5,
                maxLength: 5

            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Country'
                },
                value: 'Indonesia',
                validation: {
                    required: true
                },
                valid: false

            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your E-Mail'
                },
                value: 'zackstam@gmail.com',
                validation: {
                    required: true
                },
                valid: false

            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' }
                    ],
                    placeholder: 'Your Delivery Method'
                },
                value: 'fastest',
                validation: {
                    required: true
                },
                valid: true

            },
        },
        formIsValid: true
    }

    orderHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (const formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        const order = {
            ingredients: this.props.ings,
            price: this.props.price,
            orderData: formData,
        }
        this.props.onOrderBurger(order);

    }

    render() { 
        let form = null;
        const formElementArray = [];
        for (const key in this.state.orderForm) {
            formElementArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        console.log('value form ', this.state.formIsValid);
        form = (
            <form>
                {formElementArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value} 
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
                ))}
                <Button btnType="Success" disabled={!this.state.formIsValid} clicked={this.orderHandler}>ORDER</Button>
            </form>
        )
        if (this.props.loading) {
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

const mapStateToProps = (state) => ({
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPice,
    loading: state.order.loading
})


const mapDispatchToProps = (dispatch) => ({
    onOrderBurger: (orderData) => dispatch(actions.purchaseBurger(orderData))
})



export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios))
