export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const PAYMENT_COMPLETE = 'PAYMENT_COMPLETE';

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

export function paymentCompleteAction() {
    return {
        type: PAYMENT_COMPLETE
    };
}