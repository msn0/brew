import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../store/actions';
import styles from './styles.module.css';

function CartButton({ product, onAddToCart }) {
    return (
        <button onClick={ () => onAddToCart(product) } className={ styles.cartButton }>
            dodaj do koszyka
        </button>
    );
}

export default connect(state => state, (dispatch) => ({
    onAddToCart: product => dispatch(addToCart(product))
}))(CartButton);