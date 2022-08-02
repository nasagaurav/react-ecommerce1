import React from 'react';
import store from './store';
import App from '../App';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Redux() {
  return (
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  );
}
export default Redux;
