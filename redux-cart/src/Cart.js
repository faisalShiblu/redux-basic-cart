import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from './redux/actions/cartActions';

const Cart = (props) => {
    const { cart, removeFromCart } = props;
    return (
        <div>
            <h1>This is cart</h1>
            <ul>
                {
                    cart.map(pd => <li key={pd.id}> {pd.name}
                        <button onClick={() => removeFromCart(pd.cartId)}>X</button>
                    </li>)
                }
            </ul>
        </div>
    );
};
const mapStateToProps = state => {
    return {
        cart: state.cart
    }
};

const mapDispatchToProps = {
    removeFromCart: removeFromCart
};


export default connect(mapStateToProps, mapDispatchToProps)(Cart);