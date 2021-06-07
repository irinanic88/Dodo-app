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
        data,
        ticketId, 
        newStatus,
    } = action;

    switch(type) {
        case LOAD_TICKETS + SUCCESS: {
            return {...state, ...arrToMap(data)};
        }
        case CREATE_TICKET + SUCCESS: {
            return {...state, [data.id]: data};
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