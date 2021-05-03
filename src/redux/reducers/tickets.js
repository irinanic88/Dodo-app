import {
    CREATE_TICKET, 
    CHANGE_TICKET_STATUS,
    DELETE_TICKET, 
    LOAD_TICKETS, 
    SUCCESS, 
} from '../actionTypes';
import {arrToMap, deleteKey} from '../utils';

const tickets = (state = {}, action) => {
    const {
        type, 
        responseData, 
        allTickets, 
        ticketId, 
        newStatus,
    } = action;

    switch(type) {
        case LOAD_TICKETS + SUCCESS: {
            return {...state, ...arrToMap(allTickets)};
        }
        case CREATE_TICKET + SUCCESS: {
            return {...state, [responseData.id]: responseData};
        }
        case CHANGE_TICKET_STATUS + SUCCESS: {
            return {...state, [ticketId]: {
                ...state[ticketId],
                status: newStatus,
            }};
        }
        case DELETE_TICKET + SUCCESS: {
            return {...deleteKey(state, ticketId)};
        }

        default:
            return state;
    }
};

export default tickets;