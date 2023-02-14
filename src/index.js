import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
/// redux ///
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// saga //
import createSagaMiddleware from 'redux-saga'
import { put, takeEvery, select } from 'redux-saga/effects';
import axios from 'axios';


//////////////////////// reducers //////////////////////////


//////////////////////// sagas //////////////////////////
function* rootSaga() {
};


/////////////////////// store //////////////////////////

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
 
  }),
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);