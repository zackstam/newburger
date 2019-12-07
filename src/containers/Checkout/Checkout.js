import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';

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

   

    render() { 
        return (
            <div>
                <CheckoutSummary
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                 ingredients={this.props.ings}></CheckoutSummary>
                 {/* <Route path={this.props.match.path + '/contact-data'}
                  render={(props) => <ContactData {...props} ingredients={this.state.ingredients} 
                  price={this.state.totalPice} />}/> */}
                <Route path={this.props.match.path + '/contact-data'}
                  component={ContactData}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    ings: state.ingredients,
    price: state.totalPice
})


export default connect(mapStateToProps, null)(Checkout);

