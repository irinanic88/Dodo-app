import {CREATE_TICKET, LOAD_TICKETS} from '../actionTypes';
import {REQUEST, SUCCESS, FAILURE} from '../actionTypes';

const initialState = {
    entities: {},
    loading: false,
    loaded: false,
    error: null,
};

const tickets = (state = initialState, action) => {
    const {type, newTicket, allTickets, error} = action;
    switch(type) {
        case LOAD_TICKETS + REQUEST: {
            return {...state, 
                loading: true, 
                error: null
            };
        }
        case LOAD_TICKETS + SUCCESS: {
            const orderedTickets = allTickets.reduce((acc, ticket) => ({...acc, [ticket.id]: ticket}), {});
            return {...state, 
                entities: {...orderedTickets},
                loading: false,
                loaded: true,
            };
        }
        case LOAD_TICKETS + FAILURE: {
            return {...state,
                loading: false,
                loaded: false,
                error,
            };
        }
        case CREATE_TICKET + REQUEST: {
            return {...state,
            loading: true,
            error: null,
            };
        } 
        case CREATE_TICKET + SUCCESS: {
            return {...state, 
            entities: {...state.entities, [newTicket.id]: newTicket},
            loading: false,
            loaded: true,
            };
        }
        case CREATE_TICKET + FAILURE: {
            return {...state,
                loading: false,
                loaded: false,
                error,
            };
        }

        default:
            return state;
    }
};

export default tickets;