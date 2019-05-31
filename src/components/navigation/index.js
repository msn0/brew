import React from 'react';
import styles from './styles.module.css';

export function Navigation() {
    return (
        <nav className={ styles.wrapper }>
            <div className={ styles.logo }>
                brew<sup>2</sup>
            </div>
            <ul className={styles.menu}>
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