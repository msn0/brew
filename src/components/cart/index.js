import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PayButton from '../pay-button';
import * as styles from './styles.module.css';

const byId = (id, products) => products.find(product => product.id === id);

const formatPrice = (price) => {
    return new Intl.NumberFormat('pl-PL', {
        style: 'currency',
        currency: price.currency
    }).format(price.amount);
};

function renderCartProduct(product) {
    const price = formatPrice(product.price);

    return (
        <article className={ styles.cartProduct } key={ product.id }>
            <div className={ styles.left }>
                <img src={ product.image } alt={ product.name } />
            </div>
            <div className={ styles.right }>
                <h5 className={ styles.name }>{ product.name }</h5>
                <div className={ styles.price }>
                    1 x { price }
                </div>
                <div className={ styles.controls }>
                    <button className={ classNames(styles.button, styles.inactive) }>−</button>
                    <button className={ styles.button }>+</button>
                    <span className={ styles.remove }>usuń</span>
                </div>
            </div>
        </article>
    );
}

function Cart ({ cart = [], products = [] }) {
    const amount = cart.reduce((acc, current) => {
        const product = products.find(p => p.id === current);
        acc += product.price.amount;
        return acc;
    }, 0);
    return (
        <div className={ styles.wrapper }>
            <h4 className={ styles.header }>Twój koszyk</h4>
            { cart.map(id => renderCartProduct(byId(id, products))) }
            <PayButton>
                Zamów i zapłać <span className={ styles.amount }>
                    { formatPrice({ amount, currency: 'PLN' }) }
                </span>
            </PayButton>
        </div>
    );
}

export default connect(state => state)(Cart);