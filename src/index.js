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
const books = (state = [], action) => {
  switch (action.type) {
      case 'SET_BOOKS':
          return action.payload;
      default:
          return state;
  };
};

const currentBook = (state = {}, action) => {
  switch (action.type) {
      case 'SET_BOOK':
          return action.payload;
      default:
          return state;
  };
};

//////////////////////// sagas //////////////////////////
function* rootSaga() {
  yield takeEvery('FETCH_BOOKS', fetchBooks);
};

//fetch list of books from json file
function* fetchBooks(){
  try{
      const books = yield axios.get('/books.json');
      
      yield put({ type: 'SET_BOOKS', payload: books.data });
  }                       
  catch(error){
      console.log('fetchBooks failed', error);
  };
};

/////////////////////// store //////////////////////////

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
      books,
      currentBook,
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