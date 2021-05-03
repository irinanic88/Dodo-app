import {
    REQUEST, 
    SUCCESS, 
    FAILURE
} from '../actionTypes';


const loader = (state = {loading: false}, action) => {
    const {fetchLoadingState} = action;

    switch(fetchLoadingState) {
        case REQUEST: {
            return {...state, loading: true};
        }
        case SUCCESS: {
            return {...state, loading: false};
        }
        case FAILURE: {
            return {...state, loading: false};
        }
        default:
            return state;
    }
};

export default loader;