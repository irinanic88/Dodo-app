export const loadingTicketsSelector = (state) => state.tickets.loading;
export const loadedTicketsSelector = (state) => state.tickets.loaded;

export const ticketsForColumnSelector =  (state, {title}) => Object.values(state.tickets.entities)
                                                    .filter((ticket) => ticket!== null && ticket.status === title);

export const displayCreateTicketWindowSelector = (state) => state.modal.displayCreateTicketWindow; 
export const displayDescriptionWindowSelector = (state) => state.modal.displayDescriptionWindow.display;

export const ticketIdSelector =  (state) => state.modal.displayDescriptionWindow.ticketId;

export const ticketSelector = (state, {ticketId}) => state.tickets.entities[ticketId];