export const loadingSelector = (state) => state.loader.loading;

export const ticketsForColumnSelector =  (state, {title}) => Object.values(state.tickets)
                                                    .filter((ticket) => ticket!== null && ticket.status === title);

export const displayCreateTicketWindowSelector = (state) => state.modal.displayCreateTicketWindow.display;
export const displayDescriptionWindowSelector = (state) => state.modal.displayDescriptionWindow.display;

export const ticketIdSelector =  (state) => state.modal.displayDescriptionWindow.ticketId;

export const ticketSelector = (state, {ticketId}) => state.tickets[ticketId];