import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header>
      <div className="logo">Ecommerce</div>
      <div>
        <Link to="/">home</Link>
        <Link to="/login">login</Link>
        <Link to="/signup">signup</Link>
        <Link to="/profile">profile</Link>
        <Link to="/orders">orders</Link>
        <Link to="/cart">cart</Link>
        <Link to="/logout">logout</Link>
      </div>
    </header>
  );
}
export default Header;
