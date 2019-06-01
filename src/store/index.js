import { createStore } from 'redux';
import products from '../dummy/products';
import rootReducer from './reducer';

export default (initialState = {
    products,
    cart: []
}) => createStore(rootReducer, initialState);