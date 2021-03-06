import {REQUEST, SUCCESS, FAILURE} from '@redux/actionTypes';

const fetchDelete = (store) => (next) => async (action) => {
    if(!action.callAPI || action.method !== 'DELETE') {
        return next(action);
    }

    const {type, callAPI, method, ...rest} = action;
    next({
        ...rest, 
        type: type + REQUEST, 
        fetchLoadingState: REQUEST
    });

    try {
        await fetch(callAPI, {method});
        next({
            ...rest, 
            type: type + SUCCESS, 
            fetchLoadingState: SUCCESS, 
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

export default fetchDelete;