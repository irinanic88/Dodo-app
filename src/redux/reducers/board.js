import {
    CHECK_BOARD_ID,
    CREATE_BOARD, FAILURE,
    SUCCESS,
} from '@redux/actionTypes';

const board = (state = {}, action) => {
    const {
        type,
        boardId,
        data,
    } = action;

    switch(type) {
        case CREATE_BOARD + SUCCESS: {
            return {...state, newId: data.uuid};
        }
        case CHECK_BOARD_ID + SUCCESS: {
            const {newId, ...rest} = {...state};

            return {...rest, [boardId]: boardId};
        }
        case CHECK_BOARD_ID + FAILURE: {
            return {...state, [boardId]: null};
        }

        default:
            return state;
    }
};

export default board;