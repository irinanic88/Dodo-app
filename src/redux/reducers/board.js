import {
    CREATE_BOARD,
    SUCCESS,
} from '../actionTypes';

const board = (state = {}, action) => {
    const {
        type,
        responseData,
    } = action;

    switch(type) {
        case CREATE_BOARD + SUCCESS: {
            return {...state, boardId: responseData.uuid};
        }

        default:
            return state;
    }
};

export default board;