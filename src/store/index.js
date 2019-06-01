import { createStore } from 'redux';
import rootReducer from './reducer';
import products from '../dummy/products';

export default (initialState = {
    products,
    cart: []
}) => createStore(rootReducer, initialState);