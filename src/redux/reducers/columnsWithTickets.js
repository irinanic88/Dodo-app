import {
    LOAD_TICKETS,
    LOAD_STATUSES,
    SUCCESS,
    FAILURE,
    REQUEST,
    CHANGE_TICKET_STATUS, DELETE_TICKET, CREATE_TICKET
} from "../actionTypes";
import {stringifyId, stringifyAll, columnsToMap, ticketsToColumns} from "../utils";

const columnsWithTickets = (state={}, action) => {
    const {
        type,
        columns,
        boardId,
        data,
        ticketId,
        source,
        destination
    } = action;
    switch (type) {
        case LOAD_STATUSES: {
            return {...state, ...columnsToMap(columns, boardId)};
        }
        case LOAD_TICKETS + SUCCESS: {
            const loadedTickets = stringifyAll(data);
            return {...ticketsToColumns({...state}, loadedTickets)};
        }
        case CREATE_TICKET + SUCCESS: {
            const newTicketData = stringifyId(data);
            return {
               ...state,
                [newTicketData.status]: {
                   ...state[newTicketData.status],
                    tickets: [...state[newTicketData.status].tickets, newTicketData.id]
                }
            }
        }
        case CHANGE_TICKET_STATUS + REQUEST: {
            const start = source.droppableId;
            const finish = destination.droppableId;

            const finishTicketsArray = state[finish].tickets.filter(item => item !== ticketId);
            const destinationIndex = destination.index;

            return {
                ...state,
                [start]: {
                    ...state[start],
                    tickets: state[start].tickets.filter(item => item !== ticketId)
                },
                [finish]: {
                    ...state[finish],
                    tickets: [...finishTicketsArray.slice(0, destinationIndex),
                                ticketId,
                                ...finishTicketsArray.slice(destinationIndex,finishTicketsArray.length)]
                }
            };
        }
        case CHANGE_TICKET_STATUS + FAILURE: {
                const start = source.droppableId;
                const finish = destination.droppableId;

            return {
                ...state,
                [start]: {
                    ...state[start],
                    tickets: [...state[start].tickets, ticketId]
                },
                [finish]: {
                    ...state[finish],
                    tickets: state[finish].tickets.filter(item => item !== ticketId)
                }
            };
        }
        case DELETE_TICKET + SUCCESS: {

            return {...state};

        }

        default:
            return state;
    }
}

export default columnsWithTickets;