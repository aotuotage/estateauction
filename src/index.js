import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import reducer from './index.reducer'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//创建store
const store = createStore(reducer);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
serviceWorker.unregister();
