import {combineReducers} from 'redux';

import board from './board';
import tickets from './tickets';
import loader from './loader';
import  statuses from './statuses';

export default combineReducers({
    board,
    statuses,
    tickets,
    loader,
});