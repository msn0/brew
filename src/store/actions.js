export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export function addToCart(id) {
    return {
        type: ADD_TO_CART,
        id
    };
}

export function removeFromCart(id, removeAll = false) {
    return {
        type: REMOVE_FROM_CART,
        id,
        removeAll
    };
}

export function payAction(cart) {
    return {
        type: ADD_TO_CART,
        cart
    };
}