import React from 'react';
import { CartButton } from '../cart-button';
import styles from './styles.module.css';

export function Product ({ product }) {
    const price = new Intl.NumberFormat('pl-PL', {
        style: 'currency',
        currency: product.price.currency
    }).format(product.price.amount);

    return (
        <article className={ styles.product }>
            <div className={ styles.left }>
                <img src={ product.image } alt={ product.title } />
            </div>
            <div className={ styles.right }>
                <h3>{ product.name }</h3>
                <p className={ styles.price }>
                    { price }
                    { product.quantity &&
                        <span className={ styles.quantity }> / { product.quantity } { product.unit }</span>
                    }
                </p>
                <p>Producent: { product.brand }</p>
                <p className={ styles.description }>
                    { product.description }
                </p>
                <p className={ styles.cartButtonWrapper }>
                    <CartButton />
                </p>
            </div>
        </article>
    );
}