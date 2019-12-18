import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route, Redirect } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';
import * as actions from './../../store/actions/index';

class Checkout extends Component {
    state = {
        ingredients: null,
        price: 0
    }

    componentWillMount() {

    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('checkout/contact-data');
    }

   

    render() {
        let summary = <Redirect to="/" />
        if (this.props.ings) {
            const purchaseRedirect = this.props.purchased ? <Redirect to="/"/> : null;
            summary = (
                <>
                    <CheckoutSummary
                        checkoutCancelled={this.checkoutCancelledHandler}
                        checkoutContinued={this.checkoutContinuedHandler}
                        ingredients={this.props.ings}/>
                    <Route path={this.props.match.path + '/contact-data'}
                        component={ContactData}/>
                </>
            );
        }
        return (
            <div>
                {summary}
                 {/* <Route path={this.props.match.path + '/contact-data'}
                  render={(props) => <ContactData {...props} ingredients={this.state.ingredients} 
                  price={this.state.totalPice} />}/> */}
 
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPice,
    purchased: state.order.purchased
});


export default connect(mapStateToProps, null)(Checkout);

