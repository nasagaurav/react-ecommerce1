import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getAllProducts, getAllTags, getAllFilters } from './services';
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
  const loadAll = () => {
    getAllProducts().then((d) => console.log('getAllProducts', d));
    getAllTags().then((d) => console.log('getAllTags', d));
    getAllFilters().then((d) => console.log('getAllFilters', d));
  };

  useEffect(loadAll, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="Orders" element={<Orders />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Logout" element={<Logout />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
