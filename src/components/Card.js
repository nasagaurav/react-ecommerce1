import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCartId, getQty, updateQty, createCart } from '../services';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';

function MyCard(props) {
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
    <Card style={{ width: '200px' }}>
      <Card.Img width="100" variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <div>
          <font size={2} color="red">
            <del>Rs.{props.old}</del>
          </font>
          <big>Rs. {props.new}</big>
        </div>
        <div>
          <i
            style={{ color: 1 <= props.rating ? 'orange' : 'silver' }}
            className="fa fa-star"
          ></i>
          <i
            style={{ color: 2 <= props.rating ? 'orange' : 'silver' }}
            className="fa fa-star"
          ></i>
          <i
            style={{ color: 3 <= props.rating ? 'orange' : 'silver' }}
            className="fa fa-star"
          ></i>
          <i
            style={{ color: 4 <= props.rating ? 'orange' : 'silver' }}
            className="fa fa-star"
          ></i>
          <i
            style={{ color: 5 <= props.rating ? 'orange' : 'silver' }}
            className="fa fa-star"
          ></i>
        </div>
        <ProgressBar
          label={`${props.discount}%`}
          variant="warning"
          now={props.discount}
        />
        <div>{props.tags}</div>

        {loggedin && (
          <Button onClick={addToCart} variant="primary">
            <i className="fa fa-shopping-cart"></i> ({_qty})
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default MyCard;
