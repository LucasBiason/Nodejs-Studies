import React, { useContext, useReducer } from 'react';
import CartContext from './CartContext';

interface Product{
    id: number;
    name: string;
    price: number;
}

interface Cart {
    products: Product[],
    shipping_value?: number;
}

type CartActionType = {
    type: 'ADD_PRODUCT' | 'REMOVE_PRODUCT'
}

const AppContext: React.FC = () => {
    const cart = useReducer(
        (state: Cart, action: CartActionType) => {
            switch(action.type){
                case 'ADD_PRODUCT':
                    return {
                        ...state,
                        products: [ ...state.products, 'Produto Novo']
                    }
                default:
                    return state;
            }
        },
        {
            products: [],
            shipping_value: 0,
        }
    )

    const {products} = useContext(CartContext);

    return (
        <ul>
            {products?.map(product => product.name)}
        </ul>
    )
}

export default AppContext;
