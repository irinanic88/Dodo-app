export const boardInfoSelector = (state, boardId) => state.board[boardId];

export const newBoardIdSelector = (state) => state.board.newId;

export const statusesSelector = (state) => state.statuses;
export const loadingSelector = (state) => state.loader.loading;

export const ticketsForColumnSelector =  (state, {status, boardId}) => {

    if (state.tickets[boardId] === undefined) {
        return [];
    }

    return (
    Object.values(state.tickets[boardId])
        .filter((ticket) => ticket !== null && ticket.status === status)
        .map((ticket) => ticket.id)
)}

export const ticketSelector = (state, {boardId, ticketId}) => {

    if (state.tickets[boardId] === undefined) {
        return undefined;
    }

    return state.tickets[boardId][ticketId];
}