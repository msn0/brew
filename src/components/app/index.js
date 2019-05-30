import React, { PureComponent } from 'react';
import styles from './styles.module.css';
import { Navigation } from '../navigation';

class App extends PureComponent {
  render() {
    return (
      <div className={ styles.wrapper }>
        <div className={ styles.navWrapper }>
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
      </div>
    );
  }
}

export default App;
