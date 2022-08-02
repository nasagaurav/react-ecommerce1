import React from 'react';
import store from './store';
import App from '../App';
import { Provider } from 'react-redux';
function Redux() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
export default Redux;
