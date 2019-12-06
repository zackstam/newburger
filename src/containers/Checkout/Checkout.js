import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: null,
        price: 0
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('checkout/contact-data');
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (const param of query.entries()) {
            if (param[0] === 'price') {
                price = param[1];
            } else {
                ingredients[param[0]] = param[1];
            }
        }
        console.log(ingredients);
        console.log(this.props.match.path)
        this.setState({ ingredients:ingredients, totalPrice: price })
    }

    render() { 
        return (
            <div>
                <CheckoutSummary
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                 ingredients={this.state.ingredients}></CheckoutSummary>
                 <Route path={this.props.match.path + '/contact-data'}
                  render={(props) => <ContactData {...props} ingredients={this.state.ingredients} 
                  price={this.state.totalPice} />}/>
            </div>
        );
    }
}
 
export default Checkout;