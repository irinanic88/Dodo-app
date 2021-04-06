import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/app';

import {boardInfo} from './fixtures';

ReactDOM.render(
    <App boardInfo={boardInfo} />,
    document.getElementById('root')
);