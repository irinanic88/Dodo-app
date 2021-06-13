import {combineReducers} from 'redux';

import board from './board';
import tickets from './tickets';
import loader from './loader';
import  columns from './columns';
import columnsWithTickets from "./columnsWithTickets";

export default combineReducers({
    board,
    columns,
    tickets,
    columnsWithTickets,
    loader,
});