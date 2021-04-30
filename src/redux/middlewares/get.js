import {REQUEST, SUCCESS, FAILURE} from '../actionTypes';

const get = (store) => (next) => async (action) => {
    if(!action.callAPI || action.method !== 'GET') {
        return next(action);
    }

    const {callAPI, type, ...rest} = action;
    next({...rest, type: type + REQUEST});
    
    try {
        const allTickets = await fetch(callAPI).then((response) => response.json());
        next({...rest, type: type + SUCCESS, allTickets});
    } catch(error) {
        throw next({...rest, type: type + FAILURE, error});
    }

};

export default get;