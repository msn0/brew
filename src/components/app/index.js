import React from 'react';
import { connect } from 'react-redux';
import { Navigation } from '../navigation';
import { Product } from '../product';
import styles from './styles.module.css';

function App({ products }) {
    return (
        <div className={ styles.wrapper }>
            <Navigation />
            <header className={ styles.header }>
                <h1>
                    brew<sup>2</sup>
                </h1>
                <h2>
                    The Home Brew Shop
                </h2>
            </header>
            <main>
                { products.map(product => <Product key={ product.id } product={ product } />) }
            </main>
        </div>
    );
}

export default connect(state => state)(App);