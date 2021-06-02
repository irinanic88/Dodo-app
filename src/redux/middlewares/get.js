import {REQUEST, SUCCESS, FAILURE} from '../actionTypes';

const fetchGet = (store) => (next) => async (action) => {
    if(!action.callAPI || action.method !== 'GET') {
        return next(action);
    }

    const {callAPI, type, fetchLoadingState, data, ...rest} = action;
    next({
        ...rest, 
        type: type + REQUEST, 
        fetchLoadingState: REQUEST
    });
    
    try {
        const allTickets = await fetch(callAPI).then((response) => {
                if (response.status !== 404) {
                    return response.json();
                } else {
                    alert("Wrong Id");
                    throw new Error(response);
                }
            }
        );

        next({
            ...rest, 
            type: type + SUCCESS, 
            fetchLoadingState: SUCCESS,
            data,
            allTickets
        });
    } catch(error) {
        console.log(error);
        throw next({
            ...rest, 
            type: type + FAILURE, 
            fetchLoadingState: FAILURE, 
            error
        });
    }

};

export default fetchGet;