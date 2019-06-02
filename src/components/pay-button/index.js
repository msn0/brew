import React from 'react';
import { connect } from 'react-redux';
import { payAction } from '../../store/actions';
import styles from './styles.module.css';

function PayButton({ cart, onPayAction, children }) {

    function buildSupportedPaymentMethodData() {
        return [{
            supportedMethods: 'basic-card',
            data: {
                supportedNetworks: ['visa', 'mastercard'],
                supportedTypes: ['debit', 'credit']
            }
        }];
    }

    function buildShoppingCartDetails() {
        const displayItems = cart.map(product => ({
            label: product.name,
            amount: {
                currency: product.price.currency,
                value: product.price.amount * product.quantity
            }
        }));
        const total = cart.reduce((acc, current) => {
            acc += current.price.amount * current.quantity;
            return acc;
        }, 0);

        return {
            displayItems,
            total: {
                label: 'Razem',
                amount: { currency: 'PLN', value: total }
            }
        };
    }

    function pay() {
        const request = new PaymentRequest(
            buildSupportedPaymentMethodData(),
            buildShoppingCartDetails()
        );

        console.log(request);

        request.show().then(function(paymentResponse) {
            console.log('paymentResponse', paymentResponse);
            paymentResponse
                .complete('success')
                .then(function() {
                    console.log('payment completed');
                });
        });
    }

    return (
        <button onClick={ pay } className={ styles.button }>
            { children }
        </button>
    );
}

export default connect(state => state, (dispatch) => ({
    onPayAction: id => dispatch(payAction(id))
}))(PayButton);