import {
    CHECK_BOARD_ID,
    CREATE_BOARD, FAILURE,
    SUCCESS,
} from '../actionTypes';

const board = (state = {}, action) => {
    const {
        type,
        responseData,
        data,
        error,
    } = action;

    switch(type) {
        case CREATE_BOARD + SUCCESS: {
            return {...state, newId: responseData.uuid};
        }
        case CHECK_BOARD_ID + SUCCESS: {
            return {...state, [data]: data};
        }
        case CHECK_BOARD_ID + FAILURE: {
            alert("Wrong Id");
            console.log(data);
            console.log(error);
            return {...state, [data]: null};
        }

        default:
            return state;
    }
};

export default board;