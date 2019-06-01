import { ADD_TO_CART } from './actions';

export default (state = {}, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const newCart = state.cart.indexOf(action.id) !== -1
                ? state.cart
                : state.cart.concat(action.id);
            const newState = {
                ...state,
                cart: newCart
            };

            return Object.assign({}, state, newState);
        }
        default:
            return state;
    }
};