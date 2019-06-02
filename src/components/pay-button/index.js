import React from 'react';
import { connect } from 'react-redux';
import { payAction } from '../../store/actions';
import styles from './styles.module.css';

function PayButton({ cart, products, onPayAction, children }) {

    function pay() {
        console.log('pay', cart);
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