import {combineReducers} from 'redux';

import board from './board';
import modal from './modal';
import tickets from './tickets';
import loader from './loader';
import  statuses from './statuses';

export default combineReducers({
    board,
    statuses,
    modal,
    tickets,
    loader,
});