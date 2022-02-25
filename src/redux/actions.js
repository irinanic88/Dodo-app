import {
    CREATE_BOARD,
    CHECK_BOARD_ID,
    LOAD_COLUMN_TITLES,
    LOAD_TICKETS,
    CREATE_TICKET,
    CHANGE_TICKET_STATUS,
    DELETE_TICKET,
    CLOSE_ALERT
    } from '@redux/actionTypes';
import {HOST} from '@config/constants';

export const createNewBoard = ({
    type: CREATE_BOARD,
    callAPI: `${HOST}/board`,
    fetchLoadingState: null,
    method: 'POST',
    fetchData: null,
});

export const checkBoardId = (boardId) => ({
    type: CHECK_BOARD_ID,
    callAPI: `${HOST}/board/${boardId}`,
    fetchLoadingState: null,
    method: 'GET',
    boardId,
});

export const loadColumns = (columnTitles, boardId) => ({
    type: LOAD_COLUMN_TITLES,
    columnTitles,
    boardId,
});

export const loadTickets = (boardId) => ({
    type: LOAD_TICKETS,
    callAPI: `${HOST}/board/${boardId}/tickets`,
    fetchLoadingState: null,
    method: 'GET',
    boardId,
});

export const createTicket = (ticketData, {boardId}) => ({
    type: CREATE_TICKET,
    callAPI: `${HOST}/board/${boardId}/tickets`,
    fetchLoadingState: null,
    method: 'POST',
    fetchData: JSON.stringify(ticketData),
    boardId,
});

export const changeStatus = (
    ticketId,
    sourceColumnTitle,
    destinationColumnTitle,
    destinationIndex,
    boardId
) => ({
    type: CHANGE_TICKET_STATUS,
    callAPI: `${HOST}/board/${boardId}/tickets/${ticketId}/status`,
    fetchLoadingState: null,
    method: 'POST',
    fetchData: JSON.stringify({'status': destinationColumnTitle}),
    ticketId,
    sourceColumnTitle,
    destinationColumnTitle,
    destinationIndex,
    boardId,
});

export const deleteTicket = ({ticketId, boardId}) => ({
    type: DELETE_TICKET,
    callAPI: `${HOST}/board/${boardId}/tickets/${ticketId}`,
    fetchLoadingState: null,
    method: 'DELETE',
    ticketId,
    boardId,
});

export const closeAlert = (id) =>  ({
    type: CLOSE_ALERT,
    id,
});



