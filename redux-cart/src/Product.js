import React from 'react';

const Product = (props) => {
    const { product, addToCart } = props;
    return (
        <div>

            <h5>{product.name}</h5>
            <button onClick={() => addToCart(product.id, product.name)}>add to cart</button>
        </div>
    );
};

export default Product;