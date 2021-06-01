import {LOAD_STATUSES} from '../actionTypes';

const statuses = (state = [], action) => {
    const {type, statuses} = action;
    switch (type) {
        case LOAD_STATUSES:
            return [...state, ...statuses];
        default:
            return state;
    }
}

export default statuses;