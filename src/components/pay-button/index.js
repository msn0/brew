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

    function getTotal () {
        return cart.reduce((acc, current) => {
            acc += current.price.amount * current.quantity;
            return acc;
        }, 0);
    }

    function buildShoppingCartDetails() {
        const displayItems = cart.map(product => ({
            label: product.name,
            amount: {
                currency: product.price.currency,
                value: product.price.amount * product.quantity
            }
        }));

        return {
            displayItems,
            total: {
                label: 'Razem',
                amount: { currency: 'PLN', value: getTotal() }
            }
        };
    }

    async function processPaymentResponse(paymentResponse) {
        const { payerEmail, payerName } = paymentResponse;

        await fetch('https://brew-api.msn0.now.sh/pay', {
            method: 'POST',
            body: JSON.stringify({
                payerEmail,
                payerName,
                currency: 'pln',
                amount: getTotal()
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json());

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