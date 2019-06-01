import React from 'react';
import styles from './styles.module.css';

export function CartButton({ onAddToCart }) {
    return (
        <button onClick={ onAddToCart } className={ styles.cartButton }>
            dodaj do koszyka
        </button>
    );
}