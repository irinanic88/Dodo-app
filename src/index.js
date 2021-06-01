import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import './index.css';

import App from '../src/components/app';
import {statuses} from './statuses';

ReactDOM.render(
    <Provider store={store}>
        <App statuses={statuses}/>
    </Provider>,
    document.getElementById('root')
);

