import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PayButton from '../pay-button';
import { addToCart, removeFromCart } from '../../store/actions';
import * as styles from './styles.module.css';

const formatPrice = (price) => {
    return new Intl.NumberFormat('pl-PL', {
        style: 'currency',
        currency: price.currency
    }).format(price.amount);
};

function Cart ({ cart = [], onAddToCart, onRemoveFromCart, onPurgeFromCart }) {

    function renderCartProduct(cartProduct) {

        return (
            <article className={ styles.cartProduct } key={ cartProduct.id }>
                <div className={ styles.left }>
                    <img src={ cartProduct.image } alt={ cartProduct.name } />
                </div>
                <div className={ styles.right }>
                    <h5 className={ styles.name }>{ cartProduct.name }</h5>
                    <div className={ styles.price }>
                        { cartProduct.quantity } x { formatPrice(cartProduct.price) }
                        { cartProduct.quantity > 1 && (
                            <>
                                { ' = ' }
                                <strong>
                                    { formatPrice({
                                        amount: cartProduct.price.amount * cartProduct.quantity,
                                        currency: cartProduct.price.currency
                                    }) }
                                </strong>
                            </>
                        ) }
                    </div>
                    <div className={ styles.controls }>
                        <button
                            className={ classNames({
                                [styles.button]: true,
                                [styles.inactive]: cartProduct.quantity <= 1
                            }) }
                            onClick={ () => onRemoveFromCart(cartProduct) }>−</button>
                        <button
                            className={ styles.button }
                            onClick={ () => onAddToCart(cartProduct) }>+</button>
                        <span
                            className={ styles.remove }
                            onClick={ () => onPurgeFromCart(cartProduct) }>usuń</span>
                    </div>
                </div>
            </article>
        );
    }

    const amount = cart.reduce((acc, current) => {
        acc += current.price.amount * current.quantity;
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
    onAddToCart: product => dispatch(addToCart(product)),
    onRemoveFromCart: product => dispatch(removeFromCart(product)),
    onPurgeFromCart: product => dispatch(removeFromCart(product, true))
});

export default connect(state => state, mapDispatchToProps)(Cart);