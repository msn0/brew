import React from 'react';
import { connect } from 'react-redux';
import { paymentCompleteAction } from '../../store/actions';
import styles from './styles.module.css';

function PayButton({ cart, onPaymentComplete, children }) {

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

    async function processPaymentResponse(paymentResponse) {
        await fetch('https://brew-api.msn0.now.sh/pay', { method: 'POST' })
            .then(r => r.json());

        setTimeout(() => {
            paymentResponse.complete('success');
            onPaymentComplete();
        }, 2000);
    }

    function pay() {
        const options = {
            requestPayerName: true,
            requestBillingAddress: true,
            requestPayerEmail: true
        };

        const request = new PaymentRequest(
            buildSupportedPaymentMethodData(),
            buildShoppingCartDetails(),
            options
        );

        request.show().then(processPaymentResponse);
    }

    return (
        <button onClick={ pay } className={ styles.button }>
            { children }
        </button>
    );
}

export default connect(state => state, (dispatch) => ({
    onPaymentComplete: () => dispatch(paymentCompleteAction())
}))(PayButton);