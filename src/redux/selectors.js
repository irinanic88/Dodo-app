export const loadingTicketsSelector = (state) => state.tickets.loading;
export const loadedTicketsSelector = (state) => state.tickets.loaded;

export const ticketsForColumnSelector =  (state, {title}) => Object.values(state.tickets.entities)
                                                    .filter((ticket) => ticket!== null && ticket.status === title);

export const displayCreateTicketWindowSelector = (state) => state.modal.displayCreateTicketWindow; 
