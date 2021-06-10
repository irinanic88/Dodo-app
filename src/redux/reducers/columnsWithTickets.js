import {
    LOAD_TICKETS,
    LOAD_STATUSES,
    SUCCESS
} from "../actionTypes";
import {columnsToMap, ticketsToColumns} from "../utils";

const columnsWithTickets = (state={}, action) => {
    const {type, columns, boardId, data} = action;
    switch (type) {
        case LOAD_STATUSES: {
            return {...state, ...columnsToMap(columns, boardId)};
        }
        case LOAD_TICKETS + SUCCESS: {
            return {...ticketsToColumns({...state}, data)};
        }

        default:
            return state;
    }
}

export default columnsWithTickets;