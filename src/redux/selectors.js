export const boardInfoSelector = (state, boardId) => state.board[boardId];

export const newBoardIdSelector = (state) => state.board.newId;

export const columnsSelector = (state) => state.columns;
export const loadingSelector = (state) => state.loader.loading;

export const ticketsForColumnSelector =  (state, {column, boardId}) => {

    if (state.tickets[boardId] === undefined) {
        return [];
    }

    return (
        state.columnsWithTickets[column].tickets
)}

export const ticketSelector = (state, {boardId, ticketId}) => {

    if (state.tickets[boardId] === undefined) {
        return undefined;
    }

    return state.tickets[boardId][ticketId];
}