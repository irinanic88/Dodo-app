import {
    CREATE_BOARD,
    CHECK_BOARD_ID,
    LOAD_STATUSES,
    LOAD_TICKETS,
    CREATE_TICKET,
    CHANGE_TICKET_STATUS,
    DELETE_TICKET, 
    } from './actionTypes';
import {HOST} from '../constants';

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

export const loadStatuses = (columns, boardId) => ({
    type: LOAD_STATUSES,
    columns,
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

export const changeStatus = (ticketId, boardId, newStatus) => ({
        type: CHANGE_TICKET_STATUS,
        callAPI: `${HOST}/board/${boardId}/tickets/${ticketId}/status`,
        fetchLoadingState: null,
        method: 'POST',
        fetchData: JSON.stringify({'status': newStatus}),
        ticketId,
        newStatus,
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


