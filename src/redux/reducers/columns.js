import {LOAD_STATUSES} from '../actionTypes';

const columns = (state = [], action) => {
    const {type, columns} = action;
    switch (type) {
        case LOAD_STATUSES:
            return [...state, ...columns];
        default:
            return state;
    }
}

export default columns;