import {combineReducers} from 'redux';

import modal from './modal';
import tickets from './tickets';

export default combineReducers({
    modal,
    tickets,
});