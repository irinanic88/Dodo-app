export const boardInfoSelector = (state, boardId) => state.board[boardId];

export const newBoardIdSelector = (state) => state.board.newId;

export const statusesSelector = (state) => state.statuses;
export const loadingSelector = (state) => state.loader.loading;

export const ticketsForColumnSelector =  (state, {status}) => Object.values(state.tickets)
                                                    .filter((ticket) => ticket!== null && ticket.status === status)
                                                    .map((ticket) => ticket.id);

export const displayCreateTicketWindowSelector = (state) => state.modal.displayCreateTicketWindow.display;
export const displayDescriptionWindowSelector = (state) => state.modal.displayDescriptionWindow.display;

export const ticketIdSelector =  (state) => state.modal.displayDescriptionWindow.ticketId;

export const ticketSelector = (state, {ticketId}) => state.tickets[ticketId];