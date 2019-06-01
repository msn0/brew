import React from 'react';
import { connect } from 'react-redux';

const byId = (id, products) => products.find(product => product.id === id);

function renderProduct(product) {
    return (
        <li key={ product.id }>{ product.name }</li>
    );
}

function Cart ({ cart = [], products = [] }) {
    return (
        <div>
            <h4>Twój koszyk</h4>
            <ul>
                { cart.map(id => renderProduct(byId(id, products))) }
            </ul>
        </div>
    );
}

export default connect(state => state)(Cart);