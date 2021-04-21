import React from 'react';
import Cart from '../../hero/cart/Cart';
import { useStore } from '../../../reactStore/reactStore';

const Destruction = () => {

    const { state, dispatch } = useStore();

    console.log(state);

    return (
        <div className="basket">
            <div className="container">
            </div>
        </div>
    );
};

export default Destruction;