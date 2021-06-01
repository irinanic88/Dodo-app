import {combineReducers} from 'redux';

import modal from './modal';
import tickets from './tickets';
import loader from './loader';
import  statuses from './statuses';

export default combineReducers({
    statuses,
    modal,
    tickets,
    loader,
});