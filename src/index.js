import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './components/app';
import { Provider } from 'react-redux';
import createStore from './store';

render(
    <Provider store={createStore()}>
        <App />
    </Provider>,
    document.getElementById('root')
);
