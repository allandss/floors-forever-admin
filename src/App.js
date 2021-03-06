import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './App.css';

import Routes from './routes';
import history from './services/history';
import { store, persistor } from './store';

function App() {
  return(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <ToastContainer autoClose={2000} />
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
)};

export default App;
