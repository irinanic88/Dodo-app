import {
    CREATE_BOARD,
    CHECK_BOARD_ID,
    LOAD_STATUSES,
    LOAD_TICKETS,
    OPEN_CREATE_TICKET_MODAL, 
    CLOSE_CREATE_TICKET_MODAL,
    OPEN_DESCRIPTION_MODAL,
    CLOSE_DESCRIPTION_MODAL, 
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
    data: null,
});

export const checkBoardId = (boardId) => ({
    type: CHECK_BOARD_ID,
    callAPI: `${HOST}/board/${boardId}`,
    fetchLoadingState: null,
    method: 'GET',
    data: boardId,
});

export const loadStatuses = (statuses) => ({
    type: LOAD_STATUSES,
    statuses: statuses,
});

export const loadTickets = (boardId) => ({
    type: LOAD_TICKETS,
    callAPI: `${HOST}/board/${boardId}/tickets`,
    fetchLoadingState: null,
    method: 'GET',
});

export const openCreateTicketModal = ({type: OPEN_CREATE_TICKET_MODAL});
export const closeCreateTicketModal = ({type: CLOSE_CREATE_TICKET_MODAL});

export const openDescriptionModal = ({ticketId}) => ({
    type: OPEN_DESCRIPTION_MODAL, 
    ticketId: ticketId,
});
export const closeDescriptionModal = ({type: CLOSE_DESCRIPTION_MODAL});

export const createTicket = (ticketData, boardId) => ({
    type: CREATE_TICKET,
    callAPI: `${HOST}/board/${boardId}/tickets`,
    fetchLoadingState: null,
    data: JSON.stringify(ticketData),
    method: 'POST',
});

export const changeStatus = (ticketId, boardId, newStatus) => ({
        type: CHANGE_TICKET_STATUS,
        callAPI: `${HOST}/board/${boardId}/tickets/${ticketId}/status`,
        fetchLoadingState: null,
        data: JSON.stringify({'status': newStatus}),
        method: 'POST',
        ticketId: ticketId,
        newStatus: newStatus,
    });

export const deleteTicket = ({ticketId, boardId}) => ({
    type: DELETE_TICKET,
    callAPI: `${HOST}/board/${boardId}/tickets/${ticketId}`,
    fetchLoadingState: null,
    ticketId: ticketId,
    method: 'DELETE',
});


