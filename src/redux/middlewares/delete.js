import {REQUEST, SUCCESS, FAILURE} from '../actionTypes';

const fetchDelete = (store) => (next) => async (action) => {
    if(!action.callAPI || action.method !== 'DELETE') {
        return next(action);
    }

    const {type, callAPI, method, ...rest} = action;
    next({...rest, type: type + REQUEST});

    try {
        await fetch(callAPI, {method});
        next({...rest, type: type + SUCCESS});
    } catch(error) {
        throw next({...rest, type: type + FAILURE, error});
    }
};

export default fetchDelete;