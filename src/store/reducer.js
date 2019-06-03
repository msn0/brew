import { ADD_TO_CART, REMOVE_FROM_CART, PAYMENT_COMPLETE } from './actions';

function isProductInCart(cart, id) {
    return cart.some(product => product.id === id);
}

export default (state = {}, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const newCart = JSON.parse(JSON.stringify(state.cart));

            if (isProductInCart(newCart, action.product.id)) {
                newCart.find(p => p.id === action.product.id).quantity++;
            } else {
                newCart.push({
                    ...action.product,
                    quantity: 1
                });
            }

            return { ...state, cart: newCart };
        }

        case REMOVE_FROM_CART: {
            const newCart = JSON.parse(JSON.stringify(state.cart));

            const product = newCart.find(p => p.id === action.product.id);

            if (product.quantity > 1 && !action.removeAll) {
                product.quantity--;

                return { ...state, cart: newCart };
            }

            const index = newCart.findIndex(p => p.id === action.product.id);

            return {
                ...state,
                cart: newCart.slice(0, index).concat(newCart.slice(index + 1))
            };
        }

        case PAYMENT_COMPLETE: {
            return {
                ...state,
                cart: [],
                paymentCompleted: true
            };
        }

        default:
            return state;
    }
};