import React from 'react';
import { connect } from 'react-redux';
import { payAction } from '../../store/actions';
import styles from './styles.module.css';

function PayButton({ cart, products, onPayAction, children }) {

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
        return {
            displayItems: [
                {
                    label: 'Example item',
                    amount: { currency: 'USD', value: '1.00' }
                }
            ],
            total: {
                label: 'Total',
                amount: { currency: 'USD', value: '1.00' }
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