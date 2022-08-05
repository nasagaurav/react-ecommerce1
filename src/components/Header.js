import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeStorage } from '../services';
import { toast } from 'react-toastify';
function Header() {
  const navigate = useNavigate();
  const state = useSelector((s) => s);
  const dispatch = useDispatch();
  const { user, loggedin, cart, orders } = state;

  const logout = () => {
    removeStorage('uid');
    removeStorage('name');
    removeStorage('email');
    removeStorage('phone');
    removeStorage('password');
    dispatch({ type: 'logout' });
    toast('you have been successfully logged out');
    navigate('/logout');
  };
  const hc = (str) => {
    navigate(str);
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => hc('/')}>home</Nav.Link>
            {!loggedin && (
              <Nav.Link onClick={() => hc('/login')}>login</Nav.Link>
            )}
            {!loggedin && (
              <Nav.Link onClick={() => hc('/signup')}>signup</Nav.Link>
            )}
            {loggedin && (
              <Nav.Link onClick={() => hc('/profile')}>profile</Nav.Link>
            )}
            {loggedin && (
              <Nav.Link onClick={() => hc('/orders')}>
                orders ({orders.length})
              </Nav.Link>
            )}
            {loggedin && (
              <Nav.Link onClick={() => hc('/cart')}>
                cart ({cart.length})
              </Nav.Link>
            )}
            {loggedin && (
              <Nav.Link onClick={logout}>logout ({user.name})</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
