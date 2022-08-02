import React from 'react';
import './style.css';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import Cart from './pages/Cart';
import Logout from './pages/Logout';
import Errorpage from './pages/Errorpage';

export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <Login />
      <Signup />
      <Profile />
      <Orders />
      <Cart />
      <Logout />
      <Errorpage />
      <Footer />
    </div>
  );
}
