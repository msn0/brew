import React, { PureComponent } from 'react';
import styles from './styles.module.css';
import { Navigation } from '../navigation';
import { Product } from '../product';

const products = [
  {
    name: 'Wheat Malt - Malteurop',
    brand: 'Malteurop',
    image: '/assets/slod1.jpg',
    price: {
      amount: 6,
      currency: 'PLN'
    }
  },
  {
    name: 'Barley Malt',
    brand: 'Viking Malt',
    image: '/assets/slod2.jpg',
    price: {
      amount: 5,
      currency: 'PLN'
    }
  },
  {
    name: 'Wheat Malt',
    brand: 'Viking Malt',
    image: '/assets/slod3.jpg',
    price: {
      amount: 6,
      currency: 'PLN'
    }
  }
];

class App extends PureComponent {
  render() {
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
          { products.map(product => 
            <Product product={ product } />
          ) }
        </main>
      </div>
    );
  }
}

export default App;
