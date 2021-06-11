import {LOAD_COLUMN_TITLES} from '../actionTypes';

const columns = (state = [], action) => {
    const {type, columnTitles} = action;
    switch (type) {
        case LOAD_COLUMN_TITLES:
            return [...state, ...columnTitles];
        default:
            return state;
    }
}

export default columns;