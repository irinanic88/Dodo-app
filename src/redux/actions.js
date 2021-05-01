import { 
    LOAD_TICKETS,
    OPEN_CREATE_TICKET_MODAL, 
    CLOSE_CREATE_TICKET_MODAL,
    OPEN_DESCRIPTION_MODAL,
    CLOSE_DESCRIPTION_MODAL, 
    CREATE_TICKET,
    DELETE_TICKET, 
    } from './actionTypes';
import {HOST} from '../constants';

export const loadTickets = ({
    type: LOAD_TICKETS,
    callAPI: `${HOST}/tickets`,
    method: 'GET',
});

export const openCreateTicketModal = ({type: OPEN_CREATE_TICKET_MODAL});
export const closeCreateTicketModal = ({type: CLOSE_CREATE_TICKET_MODAL});

export const openDescriptionModal = ({ticket}) => ({
    type: OPEN_DESCRIPTION_MODAL, 
    ticketId: ticket.id
});
export const closeDescriptionModal = ({type: CLOSE_DESCRIPTION_MODAL});

export const createTicket = (ticketData) => ({
    type: CREATE_TICKET,
    callAPI: `${HOST}/tickets`,
    ticketData: JSON.stringify(ticketData),
    method: 'POST',
});
export const deleteTicket = ({ticketId}) => ({
    type: DELETE_TICKET,
    callAPI: `${HOST}/tickets/${ticketId}`,
    ticketId: ticketId,
    method: 'DELETE',
});


