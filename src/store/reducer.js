import { ADD_TO_CART } from './actions';

export default (state = {}, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const newState = {
                ...state,
                cart: state.cart.concat(action.product)
            };

            return Object.assign({}, state, newState);
        }
        default:
            return state;
    }
};