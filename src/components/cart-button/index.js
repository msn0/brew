import React from 'react';
import styles from './styles.module.css';

export function CartButton() {
    return (
        <button className={ styles.cartButton }>
            dodaj do koszyka
        </button>
    );
}