export const ADD_TO_CART = 'ADD_TO_CART';

export function addToCart(id) {
    return {
        type: ADD_TO_CART,
        id
    };
}

export function payAction(cart) {
    return {
        type: ADD_TO_CART,
        cart
    };
}