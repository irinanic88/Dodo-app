import {CLOSE_ALERT, CREATE_BOARD, FAILURE, SUCCESS} from '../actionTypes';

import {generateId} from "../utils";

const alerts = (state = [], action) => {
    const {type, error, data, id} = action;

    switch(type) {
        case CLOSE_ALERT: {
            return state.filter((alert) => alert.id !== id);
        }
        case CREATE_BOARD + SUCCESS: {
            return [...state, {
                id: generateId(),
                type: 'SUCCESS',
                message: 'Board created!',
                data: data.uuid,
            }];
        }
        case CREATE_BOARD + FAILURE: {
            return [...state, {
                type: 'ERROR',
                message: 'Failed to create a new board. Please, try again!',
                data: error,
            }]
        }
        default:
            return state;
    }
}

export default alerts;