import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
    cart: [],
    products: [
        { id: 1, name: 'prod-1' },
        { id: 2, name: 'prod-2' },
        { id: 3, name: 'prod-3' },
        { id: 4, name: 'prod-4' },
        { id: 5, name: 'prod-5' },
        { id: 6, name: 'prod-5' }
    ]
}

const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newItem = {
                id: action.id,
                name: action.name,
                cartId: state.cart.length + 1
            }
            const newCart = [...state.cart, newItem];
            return { ...state, cart: newCart };
        case REMOVE_FROM_CART:
            const id = action.id;
            const newReamining = state.cart.filter(item => item.cartId !== id);
            return { ...state, cart: newReamining };
        default:
            return state;
    }
}

export default cartReducers;