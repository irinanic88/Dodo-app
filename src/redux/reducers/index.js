import {combineReducers} from 'redux';

import board from '@reducers/board';
import tickets from '@reducers/tickets';
import loader from '@reducers/loader';
import columns from '@reducers/columns';
import alerts from '@reducers/alerts';
import columnsWithTickets from "@reducers/columnsWithTickets";

export default combineReducers({
    board,
    columns,
    tickets,
    columnsWithTickets,
    loader,
    alerts
});