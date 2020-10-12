import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart;

    const price = cart.map(cart => cart.price);
    let total = 0;
    for (let i = 0; i < price.length; i++) {
        const element = price[i];
        total = total + element;
    }
    return (
        <div className='cart'>
            <h5>Order Summary</h5>
            <h6>Course order {cart.length}</h6>
            <h6>Total price - {total}</h6>
            <h6 className='border-bottom'>List of courses</h6>
            <ol>
                {
                    cart.map(cart =><li>Course code{cart.code}</li>)
                }
            </ol>
        </div>
    );
};

export default Cart;