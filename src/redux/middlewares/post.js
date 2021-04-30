import {REQUEST, SUCCESS, FAILURE} from '../actionTypes';

const post = (store) => (next) => async (action) => {
    if(!action.callAPI || action.method !== 'POST'){
        return next(action);
    }

    const { callAPI, ticketData, type, ...rest } = action;
    next({...rest, type: type + REQUEST});

    try {
        const response = await fetch(callAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: ticketData,
        });
        const newTicket = await response.json();
        next({ ...rest, type: type + SUCCESS, newTicket });
    } catch(error) {
        throw next({...rest, type: type + FAILURE, error});
    }
};

export default post;