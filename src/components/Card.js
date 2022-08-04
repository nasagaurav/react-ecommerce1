import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCartId, getQty, updateQty, createCart } from '../services';
function Card(props) {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();
  const { user, loggedin, cart } = state;
  const product = {
    pid: props.id,
    title: props.title,
    description: props.description,
    old: props.old,
    new: props.new,
    discount: props.discount,
    rating: props.rating,
    tags: props.tags,
    image: props.image,
  };
  const addToCart = () => {
    let payload = {
      ...product,
      uid: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      password: user.password,
    };
    if (_qty > 0) {
      // update [patch]
      payload = { id: _cid, qty: _qty + 1 };
      updateQty(payload)
        .then((d) => {
          return cart.map((x) => (x.id === _cid ? { ...x, qty: _qty + 1 } : x));
        })
        .then((d) => {
          dispatch({ type: 'updateQty', payload: d });
        });
    } else {
      payload = { ...payload, qty: 1 };
      // insert [post]
      createCart(payload)
        .then((d) => [...cart, d])
        .then((d) => {
          dispatch({ type: 'createCart', payload: d });
        });
    }
  };

  const _qty = getQty(cart, user.id, product.pid);
  const _cid = getCartId(cart, user.id, product.pid);
  return (
    <div>
      <img width={100} height={100} src={props.image} alt="" />
      <div>{props.title}</div>
      <div>{props.description}</div>
      <div>{props.old}</div>
      <div>{props.new}</div>
      <div>{props.rating}</div>
      <div>{props.discount}</div>
      <div>{props.tags}</div>
      {loggedin && <div onClick={addToCart}>add to cart ({_qty})</div>}
    </div>
  );
}
export default Card;
