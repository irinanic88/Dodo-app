import {
    CREATE_TICKET, 
    CHANGE_TICKET_STATUS,
    DELETE_TICKET, 
    LOAD_TICKETS, 
    SUCCESS, 
} from '@redux/actionTypes';
import {stringifyId, stringifyAll,arrToMap, deleteKey} from '@redux/utils';

const tickets = (state = {}, action) => {
    const {
        type,
        data,
        ticketId,
        boardId,
        destinationColumnTitle,
    } = action;

    switch(type) {
        case LOAD_TICKETS + SUCCESS: {
            const loadedTickets = stringifyAll(data);
            return {...state, [boardId]: { ...arrToMap(loadedTickets)}};
        }
        case CREATE_TICKET + SUCCESS: {
            const newTicketData = stringifyId(data);
            return {
                ...state, [boardId]: {
                    ...state[boardId], [newTicketData.id]: newTicketData
                }
            }
        }
        case CHANGE_TICKET_STATUS + SUCCESS: {

            return {...state, [boardId]: {
                ...state[boardId], [ticketId]: {
                        ...state[boardId][ticketId],
                        status: destinationColumnTitle,
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

