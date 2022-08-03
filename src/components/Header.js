import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Header() {
  const state = useSelector((s) => s);

  const { user, loggedin } = state;

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
        {loggedin && <Link to="/logout">logout</Link>}
      </div>
    </header>
  );
}
export default Header;
