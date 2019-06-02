import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../navigation';
import { Product } from '../product';
import Cart from '../cart';
import { addToCart } from '../../store/actions';
import styles from './styles.module.css';

function App({ products, cart = [] }) {
    return (
        <div className={ styles.wrapper }>
            <div className={ styleMedia.navigationWrapper }>
                <Navigation />
            </div>
            <header className={ styles.header }>
                <h1>
                    brew<sup>2</sup>
                </h1>
                <h2>
                    The Home Brew Shop
                </h2>
            </header>
            <main>
                { products.map(product =>
                    <Product key={ product.id } product={ product } />
                ) }
            </main>
            { cart.length > 0 &&
                <aside>
                    <Cart />
                </aside>
            }
        </div>
    );
}
const mapDispatchToProps = dispatch => ({
    onAddToCart: product => dispatch(addToCart(product))
});

export default connect(state => state, mapDispatchToProps)(App);