import {
    CREATE_TICKET, 
    DELETE_TICKET, 
    LOAD_TICKETS, 
    REQUEST, 
    SUCCESS, 
    FAILURE
} from '../actionTypes';


const loader = (state = {loading: false}, action) => {
    const {type} = action;

    switch(type) {
        case LOAD_TICKETS + REQUEST: {
            return {...state, loading: true};
        }
        case LOAD_TICKETS + SUCCESS: {
            return {...state, loading: false};
        }
        case LOAD_TICKETS + FAILURE: {
            return {...state, loading: false};
        }
        case CREATE_TICKET + REQUEST: {
            return {...state, loading: true};
        } 
        case CREATE_TICKET + SUCCESS: {
            return {...state, loading: false};
        }
        case CREATE_TICKET + FAILURE: {
            return {...state, loading: false};
        }
        case DELETE_TICKET + REQUEST: {
            return {...state, loading: true};
        }
        case DELETE_TICKET + SUCCESS: {
            return {...state, loading: false};
        }
        case DELETE_TICKET + FAILURE: {
            return {...state, loading: false};
        }
        default:
            return state;
    }
};

export default loader;