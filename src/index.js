import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import './index.css';

import OpenCreateBoard from '../src/components/openCreateBoard';
import  BoardPage from '../src/components/boardPage';
import {titles} from './titles';

ReactDOM.render(
    <Provider store={store}>
        <BoardPage titles={titles} />
    </Provider>,
    document.getElementById('root')
);



//        <OpenCreateBoard />