import React from 'react';
import ReactDOM from 'react-dom/client';
import './styling/addHouse.css';
import './styling/reservations.css';
import './styling/login.css';
import './styling/forms.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
