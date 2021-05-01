import {
    CREATE_TICKET, 
    DELETE_TICKET, 
    LOAD_TICKETS, 
    SUCCESS, 
} from '../actionTypes';
import {arrToMap, deleteKey} from '../utils';

const tickets = (state = {}, action) => {
    const {
        type, 
        newTicket, 
        allTickets, 
        ticketId, 
    } = action;

    switch(type) {
        case LOAD_TICKETS + SUCCESS: {
            return {...state, ...arrToMap(allTickets)};
        }
        case CREATE_TICKET + SUCCESS: {
            return {...state, [newTicket.id]: newTicket};
        }
        case DELETE_TICKET + SUCCESS: {
            return {...deleteKey(state, ticketId)};
        }
        default:
            return state;
    }
};

export default tickets;