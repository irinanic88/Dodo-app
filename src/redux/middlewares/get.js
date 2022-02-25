import {REQUEST, SUCCESS, FAILURE} from '@redux/actionTypes';

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
        const data = await fetch(callAPI).then((response) => {
                if (response.status < 300) {
                    return response.json();
                } else {
                    throw new Error(response.statusText);
                }
            }
        );
        next({
            ...rest, 
            type: type + SUCCESS, 
            fetchLoadingState: SUCCESS,
            data,
        });

    } catch(error) {
        throw next({
            ...rest,
            type: type + FAILURE, 
            fetchLoadingState: FAILURE, 
            error,
        });
    }

};

export default fetchGet;