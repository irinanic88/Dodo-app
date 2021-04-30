import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import './index.css';

import App from './components/app';

import {boardInfo} from './fixtures';

ReactDOM.render(
    <Provider store={store}>
        <App boardInfo={boardInfo} />
    </Provider>,
    document.getElementById('root')
);