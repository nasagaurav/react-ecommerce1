import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCartService } from '../services';
function Cart() {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();
  const { cart } = state;
  const removeFromCart = (id) => {
    removeFromCartService(id)
      .then((d) => cart.filter((x) => x.id !== id))
      .then((d) => {
        dispatch({ type: 'removeFromCart', payload: d });
      });
  };
  return (
    <div>
      <h1>Total cart ({cart.length}) </h1>
      <table>
        <tr>
          <th>title</th>
          <th>price</th>
          <th>photo</th>
          <th>discount</th>
          <th>rating</th>
          <th>actions</th>
        </tr>
        {cart.map((item) => (
          <tr>
            <td>{item.title}</td>
            <td>{item.new}</td>
            <td>
              <img src={item.image} width={100} height={100} />
            </td>
            <td>{item.discount}</td>
            <td>{item.rating}</td>
            <td>
              <button onClick={() => removeFromCart(item.id)}>remove</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default Cart;
