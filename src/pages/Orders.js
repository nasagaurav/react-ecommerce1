import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCartService } from '../services';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function Orders() {
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
    <Container>
      <br />
      <Alert variant="info">
        <h1>Total Orders ({cart.length}) </h1>
        this might need payment to integrate
      </Alert>
      <Table variant="dark">
        <thead>
          <tr>
            <th>title</th>
            <th>price</th>
            <th>photo</th>
            <th>discount</th>
            <th>rating</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
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
                <Button
                  variant="danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  <i className="fa fa-trash"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
export default Orders;
