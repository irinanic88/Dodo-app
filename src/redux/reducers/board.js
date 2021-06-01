import {
    CHECK_BOARD_ID,
    CREATE_BOARD,
    SUCCESS,
} from '../actionTypes';

const board = (state = {}, action) => {
    const {
        type,
        responseData,
        data,
    } = action;

    switch(type) {
        case CREATE_BOARD + SUCCESS: {
            return {...state, boardId: responseData.uuid};
        }
        case CHECK_BOARD_ID + SUCCESS: {
            return {...state, boardId: data};
        }

        default:
            return state;
    }
};

export default board;