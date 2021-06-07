export const boardInfoSelector = (state, boardId) => state.board[boardId];

export const newBoardIdSelector = (state) => state.board.newId;

export const statusesSelector = (state) => state.statuses;
export const loadingSelector = (state) => state.loader.loading;

export const ticketsForColumnSelector =  (state, {status}) => Object.values(state.tickets)
                                                    .filter((ticket) => ticket!== null && ticket.status === status)
                                                    .map((ticket) => ticket.id);

export const ticketSelector = (state, ticketId) => state.tickets[ticketId];