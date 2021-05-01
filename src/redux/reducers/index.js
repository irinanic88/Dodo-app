import {combineReducers} from 'redux';

import modal from './modal';
import tickets from './tickets';
import loader from './loader';

export default combineReducers({
    modal,
    tickets,
    loader,
});