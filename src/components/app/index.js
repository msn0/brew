import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.css';
import { Navigation } from '../navigation';
import { Product } from '../product';

function App({ products }) {
  return (
    <div className={styles.wrapper}>
      <Navigation />
      <header className={styles.header}>
        <h1>
          brew<sup>2</sup>
        </h1>
        <h2>
          The Home Brew Shop
          </h2>
      </header>
      <main>
        {products.map(product =>
          <Product product={product} />
        )}
      </main>
    </div>
  );
}

export default connect(state => state)(App);  