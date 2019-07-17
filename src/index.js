import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from "./store"
import App from './App';
import {
    Provider
}from "react-redux";
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import {
    Provider
} from "react-redux";
import store from "./store"
=======

>>>>>>> 8b6332137fe18639796465eb9e42119591a66ed3
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
