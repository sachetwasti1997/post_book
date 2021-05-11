import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
import reducers from "./reducers";
import {Provider} from "react-redux";

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
