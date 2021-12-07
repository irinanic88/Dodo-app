import {
    SUCCESS,
    FAILURE,
    CREATE_BOARD, CHECK_BOARD_ID
} from '../actionTypes';

const alerts = (state = [], action) => {
    const {type, error, data} = action;

    switch(type) {
        case CREATE_BOARD + SUCCESS: {
            return [...state, {
                type: 'success',
                message: 'Board created!',
                data: data.uuid,
            }];
        }
        case CREATE_BOARD + FAILURE: {
            return [...state, {
                type: 'error',
                message: 'Failed to create a new board. Please, try again!',
                data: error,
            }]
        }

        default:
            return state;
    }
}

export default alerts;