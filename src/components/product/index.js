import React from 'react';

export function Product ({ product }) {
    return (
        <article>
            <h3>{ product.name }</h3>
        </article>
    );
}