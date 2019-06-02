import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PayButton from '../pay-button';
import { addToCart, removeFromCart } from '../../store/actions';
import * as styles from './styles.module.css';

const byId = (id, products) => products.find(product => product.id === id);

const formatPrice = (price) => {
    return new Intl.NumberFormat('pl-PL', {
        style: 'currency',
        currency: price.currency
    }).format(price.amount);
};

function Cart ({ cart = [], products = [], onAddToCart, onRemoveFromCart, onPurgeFromCart }) {

    function renderCartProduct(cartProduct) {
        const product = byId(cartProduct.id, products);

        return (
            <article className={ styles.cartProduct } key={ product.id }>
                <div className={ styles.left }>
                    <img src={ product.image } alt={ product.name } />
                </div>
                <div className={ styles.right }>
                    <h5 className={ styles.name }>{ product.name }</h5>
                    <div className={ styles.price }>
                        { cartProduct.quantity } x { formatPrice(product.price) }
                        { cartProduct.quantity > 1 && (
                            <>
                                { ' = ' }
                                <strong>
                                    { formatPrice({
                                        amount: product.price.amount * cartProduct.quantity,
                                        currency: product.price.currency
                                    }) }
                                </strong>
                            </>
                        ) }
                    </div>
                    <div className={ styles.controls }>
                        <button
                            className={ classNames(styles.button, styles.inactive) }
                            onClick={ () => onRemoveFromCart(product.id) }>−</button>
                        <button
                            className={ styles.button }
                            onClick={ () => onAddToCart(product.id) }>+</button>
                        <span
                            className={ styles.remove }
                            onClick={ () => onPurgeFromCart(product.id) }>usuń</span>
                    </div>
                </div>
            </article>
        );
    }

    const amount = cart.reduce((acc, current) => {
        const product = products.find(p => p.id === current.id);
        acc += product.price.amount * current.quantity;
        return acc;
    }, 0);

    return (
        <div className={ styles.wrapper }>
            <h4 className={ styles.header }>Twoje zamówienie</h4>
            { cart.map(p => renderCartProduct(p)) }
            <PayButton>
                Zamów i zapłać <span className={ styles.amount }>
                    { formatPrice({ amount, currency: 'PLN' }) }
                </span>
            </PayButton>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    onAddToCart: id => dispatch(addToCart(id)),
    onRemoveFromCart: id => dispatch(removeFromCart(id)),
    onPurgeFromCart: id => dispatch(removeFromCart(id, true))
});

export default connect(state => state, mapDispatchToProps)(Cart);