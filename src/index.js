import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import generatorStore from './generator/Store'


// 表示をレンダリング
ReactDOM.render(
    <Provider store={generatorStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);