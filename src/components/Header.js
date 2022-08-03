import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeStorage } from '../services';
function Header() {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();
  const { user, loggedin } = state;

  const logout = () => {
    removeStorage('uid');
    removeStorage('name');
    removeStorage('email');
    removeStorage('phone');
    removeStorage('password');
    dispatch({ type: 'logout' });
  };

  return (
    <header>
      <div className="logo">Ecommerce</div>
      <div>
        <Link to="/">home</Link>

        {!loggedin && <Link to="/login">login</Link>}
        {!loggedin && <Link to="/signup">signup</Link>}
        {loggedin && <Link to="/profile">profile</Link>}
        {loggedin && <Link to="/orders">orders</Link>}
        {loggedin && <Link to="/cart">cart</Link>}
        {loggedin && <button onClick={logout}>logout ({user.name})</button>}
      </div>
    </header>
  );
}
export default Header;
