import {
    LOAD_TICKETS,
    LOAD_COLUMN_TITLES,
    SUCCESS,
    FAILURE,
    REQUEST,
    CHANGE_TICKET_STATUS, DELETE_TICKET, CREATE_TICKET
} from '@redux/actionTypes';
import {stringifyId, stringifyAll, columnsToMap, ticketsToColumns} from "@redux/utils";

const columnsWithTickets = (state={}, action) => {
    const {
        type,
        columnTitles,
        boardId,
        data,
        ticketId,
        sourceColumnTitle,
        destinationColumnTitle,
        destinationIndex,
    } = action;
    switch (type) {
        case LOAD_COLUMN_TITLES: {
            return {...state, ...columnsToMap(columnTitles, boardId)};
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
            const finishTicketsArray = state[destinationColumnTitle].tickets.filter(item => item !== ticketId);

            return {
                ...state,
                [sourceColumnTitle]: {
                    ...state[sourceColumnTitle],
                    tickets: state[sourceColumnTitle].tickets.filter(item => item !== ticketId)
                },
                [destinationColumnTitle]: {
                    ...state[destinationColumnTitle],
                    tickets: [...finishTicketsArray.slice(0, destinationIndex),
                                ticketId,
                                ...finishTicketsArray.slice(destinationIndex,finishTicketsArray.length)]
                }
            };
        }
        case CHANGE_TICKET_STATUS + FAILURE: {
            return {
                ...state,
                [sourceColumnTitle]: {
                    ...state[sourceColumnTitle],
                    tickets: [...state[sourceColumnTitle].tickets, ticketId]
                },
                [destinationColumnTitle]: {
                    ...state[destinationColumnTitle],
                    tickets: state[destinationColumnTitle].tickets.filter(item => item !== ticketId)
                }
            };
        }
        case DELETE_TICKET + SUCCESS: {
            const deleteTicketFromColumn = (columns) => {
                const newColumns = columns.map(column => ({...column, tickets: column.tickets.filter(item=>item !== ticketId)}));
                return newColumns.reduce((acc, item) => ({...acc, [item.title]: item}), {})
            }
                return deleteTicketFromColumn(Object.values(state));
        }
        default:
            return state;
    }
}

export default columnsWithTickets;