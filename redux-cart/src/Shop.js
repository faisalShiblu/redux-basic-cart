import React from 'react';
import Product from './Product';

const Shop = () => {
    const products = [
        { id: 1, name: 'prod-1' },
        { id: 2, name: 'prod-2' },
        { id: 3, name: 'prod-3' },
        { id: 4, name: 'prod-4' },
        { id: 5, name: 'prod-5' },
        { id: 6, name: 'prod-5' }
    ]
    return (
        <div>
            <h1>This is shop</h1>
            {
                products.map(pd => <Product key={pd.id} product={pd}></Product>)
            }
        </div>
    );
};

export default Shop;