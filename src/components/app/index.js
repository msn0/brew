import React from 'react';
import styles from './styles.module.css';
import { Navigation } from '../navigation';
import { Product } from '../product';
import slod1 from './assets/slod1.jpg';
import slod2 from './assets/slod2.jpg';
import slod3 from './assets/slod3.jpg';

const products = [
  {
    name: 'Wheat Malt - Malteurop',
    brand: 'Malteurop',
    image: slod1,
    price: {
      amount: 6,
      currency: 'PLN'
    }
  },
  {
    name: 'Barley Malt',
    brand: 'Viking Malt',
    image: slod2,
    price: {
      amount: 5,
      currency: 'PLN'
    }
  },
  {
    name: 'Wheat Malt',
    brand: 'Viking Malt',
    image: slod3,
    price: {
      amount: 6,
      currency: 'PLN'
    }
  }
];

export default function App() {
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
