import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import  thunkMiddleware  from 'redux-thunk';
import { inputChange, emailChange, passwordChange, loadUser, routeChange, nameChange } from './reducers';

const rootReducer = combineReducers({inputChange, emailChange, passwordChange, loadUser, routeChange, nameChange}) // combine all of reducers into rootReducer
const logger = createLogger(); //log each action for debugging //or redux devtool
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger)); //Create object tree of Redux State (redux libary)

ReactDOM.render(
  <React.StrictMode>
  	<Provider store={store}>  
    	<App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
