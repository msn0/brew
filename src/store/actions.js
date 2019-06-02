export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export function addToCart(product) {
    return {
        type: ADD_TO_CART,
        product
    };
}

export function removeFromCart(product, removeAll = false) {
    return {
        type: REMOVE_FROM_CART,
        product,
        removeAll
    };
}

export function payAction(cart) {
    return {
        type: ADD_TO_CART,
        cart
    };
}