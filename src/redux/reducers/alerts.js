import {
    CHANGE_TICKET_STATUS,
    CHECK_BOARD_ID,
    CLOSE_ALERT,
    CREATE_BOARD,
    CREATE_TICKET, DELETE_TICKET,
    FAILURE,
    SUCCESS
} from '../actionTypes';

import {SUCCESS_ALERT, ERROR_ALERT} from '../variables/alertTypes';

import {generateId, stringifyId} from "../utils";

const alerts = (state = [], action) => {
    const {type, error, data, id, ticketId, destinationColumnTitle} = action;

    switch(type) {
        case CLOSE_ALERT: {
            return state.filter((alert) => alert.id !== id);
        }
        case CREATE_BOARD + SUCCESS: {
            return [...state, {
                id: generateId(),
                type: SUCCESS_ALERT,
                message: 'Board created!',
                details: `ID: ${data.uuid}`,
            }];
        }
        case CREATE_BOARD + FAILURE: {
            return [...state, {
                id: generateId(),
                type: ERROR_ALERT,
                message: 'Failed to create a new board. Please, try again!',
                details: `Error: ${error.message}`,
            }]
        }
        case CHECK_BOARD_ID + FAILURE: {
            return [...state, {
                id: generateId(),
                type: ERROR_ALERT,
                message: 'Failed to open the board',
                details: `Error: ${error.message}`,
            }];
        }
        case CREATE_TICKET + SUCCESS: {
            return [...state, {
                id: generateId(),
                type: SUCCESS_ALERT,
                message: 'Ticket created with success',
                details: `ID: ${data.id}`,
            }]
        }
        case CREATE_TICKET + FAILURE: {
            return [...state, {
                id: generateId(),
                type: ERROR_ALERT,
                message: 'Failed to create new ticket',
                details: `Error: ${error.message}`,
            }];
        }
        case CHANGE_TICKET_STATUS + SUCCESS: {
            return [...state, {
                id: generateId(),
                type: SUCCESS_ALERT,
                message: `Ticket's status has been changed`,
                details: `Ticket №${ticketId} has status ${destinationColumnTitle}`,
            }]
        }
        case CHANGE_TICKET_STATUS + FAILURE: {
            return [...state, {
                id: generateId(),
                type: ERROR_ALERT,
                message: 'Failed to change status',
                details: `Error: ${error.message}`,
            }];
        }
        case DELETE_TICKET + SUCCESS: {
            return [...state, {
                id: generateId(),
                type: SUCCESS_ALERT,
                message: `Ticket has been deleted`,
                details: `Ticket ${ticketId} doesn't exist anymore`,
            }]
        }
        case DELETE_TICKET + FAILURE: {
            return [...state, {
                id: generateId(),
                type: ERROR_ALERT,
                message: 'Failed to delete',
                details: `Error: ${error.message}. Ticket ${ticketId} is still alive`,
            }];
        }
        default:
            return state;
    }
}

export default alerts;