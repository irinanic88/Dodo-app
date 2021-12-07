import { v4 as uuidv4 } from 'uuid';

export const arrToMap = (arr) =>
    arr.reduce((acc, item) => ({...acc, [item.id]: item}), {});

export const deleteKey = (obj, id) => {
    return Object.entries(obj).filter(([key]) => key !== id)
                .reduce((acc, [key, value]) => ({...acc, [key]: value}) ,{});
};

export const columnsToMap = (columns, boardId) => {
    return columns.reduce((acc, column) => ({
        ...acc, [column]: {
            title: column,
            boardId: boardId,
            tickets: []}
    }), {});
};

export const ticketsToColumns = (columns, tickets) => {
    return (
        Object.values(columns).map(column => ({
            ...column, tickets: tickets.filter(ticket => ticket.status === column.title)
                                        .map(ticket => ticket.id)
        })).reduce((acc, column) => ({
            ...acc, [column.title]: column
        }), {})
    )
};
export const stringifyId = (ticket) => ({...ticket, id: ticket.id.toString()});
export const stringifyAll = (tickets) => tickets.map(ticket => stringifyId(ticket));

export const generateId = () => uuidv4();

