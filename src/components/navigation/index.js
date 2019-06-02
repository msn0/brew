import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import styles from './styles.module.css';

function Navigation({ cart }) {
    return (
        <nav className={ styles.wrapper }>
            <div className={ styles.logo }>
                brew<sup>2</sup>
            </div>
            <ul className={ classNames(styles.menu, { [styles.narrow]: cart.length > 0 }) }>
                <li className={ styles.active }>
                    shop
                </li>
                <li>
                    beer making kits
                </li>
                <li>
                    kit instructions
                </li>
                <li>
                    articles
                </li>
                <li>
                    sign in
                </li>
            </ul>
        </nav>
    );
}

export default connect(state => state)(Navigation);