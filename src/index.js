import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import store from './redux/store';
import './index.css';

import App from '../src/components/app';
import {statuses} from './statuses';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App statuses={statuses}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);

