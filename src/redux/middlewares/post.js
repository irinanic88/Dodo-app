import {REQUEST, SUCCESS, FAILURE} from '../actionTypes';

const fetchPost = (store) => (next) => async (action) => {
    if(!action.callAPI || action.method !== 'POST'){
        return next(action);
    }

    const { callAPI, fetchData, type, method, ...rest } = action;
    next({
        ...rest, 
        type: type + REQUEST, 
        fetchLoadingState: REQUEST
    });

    try {
        const responseText = await fetch(callAPI, {
            method: method,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: fetchData,
        }).then((res) => res.text());

        const data = responseText.length > 0 ? await JSON.parse(responseText) : null;
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
            error
        });
    }
};

export default fetchPost;