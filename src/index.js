import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import './index.css';

import App from './components/app';

import {titles} from './titles';

ReactDOM.render(
    <Provider store={store}>
        <App titles={titles} />
    </Provider>,
    document.getElementById('root')
);