import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/cartSlice';

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Cart</h1>
      {items.map(item => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.price} x {item.quantity}</p>
          <button onClick={() => dispatch(removeItem(item))}>Remove</button>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => dispatch(updateQuantity({ id: item.id, quantity: parseInt(e.target.value) }))}
          />
        </div>
      ))}
      <h3>Total: {total}</h3>
    </div>
  );
}

export default Cart;
