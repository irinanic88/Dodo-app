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
        boardId,
        newStatus,
    } = action;

    switch(type) {
        case LOAD_TICKETS + SUCCESS: {
            return {...state, [boardId]: { ...arrToMap(data)}};
        }
        case CREATE_TICKET + SUCCESS: {
            return {
                ...state, [boardId]: {
                    ...state[boardId], [data.id]: data
                }
            }
        }
        case CHANGE_TICKET_STATUS + SUCCESS: {

            return {...state, [boardId]: {
                ...state[boardId], [ticketId]: {
                        ...state[boardId][ticketId],
                        status: newStatus,
                    }
                }};
        }
        case DELETE_TICKET + SUCCESS: {

            return {...state, [boardId]:{
                ...deleteKey(state[boardId], ticketId)
            }}

        }

        default:
            return state;
    }
};

export default tickets;

