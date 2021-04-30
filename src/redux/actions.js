import { OPEN_CREATE_TICKET_MODAL, CLOSE_CREATE_TICKET_MODAL, CREATE_TICKET, LOAD_TICKETS } from './actionTypes';

export const openCreateTicketModal = ({type: OPEN_CREATE_TICKET_MODAL});
export const closeCreateTicketModal = ({type: CLOSE_CREATE_TICKET_MODAL});

export const createTicket = (ticketData) => ({
    type: CREATE_TICKET,
    callAPI: 'http://localhost:8080/api/tickets',
    ticketData: JSON.stringify(ticketData),
    method: 'POST',
});

export const loadTickets = ({
    type: LOAD_TICKETS,
    callAPI: 'http://localhost:8080/api/tickets',
    method: 'GET',
});
