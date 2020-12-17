// package import
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {Provider} from 'react-redux'

// file import
import './index.css';
import App from './components/App';
import rootReducer from './Reducers/index'
import { render } from '@testing-library/react';


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
// export const StoreContext = createContext();
// console.log('Store Context:', StoreContext)
// console.log('store', store);
// class Provider extends React.Component {
//   render() {
//     const { store } = this.props;
//     console.log('Properties-', this.props);
//     return <StoreContext.Provider value={store}>
//       {this.props.children}
//     </StoreContext.Provider>
//   }
// }

// console.log('Before state', store.getState());
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{
//     name: 'Superman'
//   }]
// })

// console.log('After state', store.getState());

// const connectedAppComponent = connect(callback)(App);
// export function connect(callback) {
//   return (Component) => {
//     class ConnectedComponent extends React.Component {
//       constructor(props) {
//         super(props);
//         this.unSubscribe = this.props.store.subscribe(() => this.forceUpdate());
//       }
//       componentWillUnmount() {
//         //  this will destroy the listener 
//         this.unSubscribe();
//       }
//       render() {
//         const { store } = this.props;
//         const state = store.getState();
//         const dataToBePassed = callback(state);
//         return (<Component {...dataToBePassed}
//           dispatch={store.dispatch}
//         />)
//       }
//     }
//   return class ConnectedComponentWrapper extends React.Component {
//     render() {
//       return (<StoreContext>
//         {
//           (store) => {
//             return (<ConnectedComponent store={store} />)
//           }
//         }
//       </StoreContext>)
//     }
//   }
// }
// }
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


