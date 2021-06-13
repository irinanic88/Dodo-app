import {LOAD_COLUMN_TITLES} from '../actionTypes';

const columns = (state = [], action) => {
    const {type, columnTitles} = action;
    switch (type) {
        case LOAD_COLUMN_TITLES:
            return [...columnTitles];
        default:
            return state;
    }
}

export default columns;