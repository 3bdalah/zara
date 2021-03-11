import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import Redux Store 
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from "./reducer/Reducer";

// Import Router Dom 
import {BrowserRouter  , Route} from "react-router-dom";

// const store = createStore(reducer);

import store from "./redux/store"; 
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
