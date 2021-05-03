import {REQUEST, SUCCESS, FAILURE} from '../actionTypes';

const fetchGet = (store) => (next) => async (action) => {
    if(!action.callAPI || action.method !== 'GET') {
        return next(action);
    }

    const {callAPI, type, fetchLoadingState, ...rest} = action;
    next({
        ...rest, 
        type: type + REQUEST, 
        fetchLoadingState: REQUEST
    });
    
    try {
        const allTickets = await fetch(callAPI).then((response) => response.json());
        next({
            ...rest, 
            type: type + SUCCESS, 
            fetchLoadingState: SUCCESS, 
            allTickets
        });
    } catch(error) {
        throw next({
            ...rest, 
            type: type + FAILURE, 
            fetchLoadingState: FAILURE, 
            error
        });
    }

};

export default fetchGet;