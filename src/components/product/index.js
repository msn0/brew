import React from 'react';
import styles from './styles.module.css';

export function Product ({ product }) {
    return (
        <article className={ styles.product }>
            <div className={ styles.left }>
                <img src={ product.image } alt={ product.title } />
            </div>
            <div className={ styles.right }>
                <h3>{ product.name }</h3>
            </div>
        </article>
    );
}