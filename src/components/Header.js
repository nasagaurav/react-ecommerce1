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

  return (
    <header>
      <div className="logo">Ecommerce</div>
      <div>
        <Link to="/">home</Link>

        {!loggedin && <Link to="/login">login</Link>}
        {!loggedin && <Link to="/signup">signup</Link>}
        {loggedin && <Link to="/profile">profile</Link>}
        {loggedin && <Link to="/orders">orders ({orders.length})</Link>}
        {loggedin && <Link to="/cart">cart ({cart.length})</Link>}
        {loggedin && <button onClick={logout}>logout ({user.name})</button>}
      </div>
    </header>
  );
}
export default Header;
