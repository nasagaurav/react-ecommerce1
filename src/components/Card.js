import React from 'react';

function Card(props) {
  // console.log(props);

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
      <div>add to cart</div>
    </div>
  );
}
export default Card;
