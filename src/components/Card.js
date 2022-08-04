import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
function Card(props) {
  const state = useSelector((s) => s);
  const { user, loggedin } = state;
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
    const payload = {
      ...product,
      uid: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      password: user.password,
    };
  };
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
      {loggedin && <div onClick={addToCart}>add to cart (0)</div>}
    </div>
  );
}
export default Card;
