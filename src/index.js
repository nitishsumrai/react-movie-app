// package import
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// file import
import './index.css';
import App from './components/App';
import rootReducer from './Reducers/index'

// following function is curried form of logger function(obj,next,action)
// redux will call this function as logger(obj)(next)(action)
// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       // middleware code
//       console.log('ACTION_TYPE= ', action.type);
//       next(action);
//     }
//   }
// }
// another way to write middleware

const logger = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action !== 'function') {
    console.log('ACTION_TYPE = ', action.type);
  }
  next(action)
}
// use thunk library instead
// const thunk = ({ dispatch, getState }) => (next) => (action) => {
//   // console.log('ACTION_TYPE = ', action.type);
//   if (typeof action === 'function') {
//     action(dispatch);
//     return;
//   }
//   next(action);
// }

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
console.log('store', store);
// console.log('Before state', store.getState());
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{
//     name: 'Superman'
//   }]
// })

// console.log('After state', store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);


