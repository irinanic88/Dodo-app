import createElement from './createElement.js';

export default class Column {
    constructor(title) {
        this.title = title;
        this.container = null;
        this.ticketContainer = null;
        this.tickets = {};
        this.render();
    }

    get elem() {
        return this.container;
    }

    columnTemplate(title) {
        return `
        <div class="board-column">
            <div class="board-column-header">
                <h2>${title}</h2>
            </div>
        </div>`;
    }

    columnBodyTemplate() {
        return `
        <div class="board-column-body">
        </div>`;
    }

    render() {
        let template = this.columnTemplate(this.title);
        this.container = createElement(template);
        
        this.ticketContainer = createElement(this.columnBodyTemplate);
        this.container.append(this.ticketContainer);
    }

    addTicket(ticket) {
        this.tickets[ticket.id] = ticket;
        this.ticketContainer.append(ticket.elem);
    }

    removeTicket(ticketId) {
        const ticketNode = this.ticketContainer.querySelector(`[data-ticket-id="${ticketId}"]`);
        ticketNode.remove();
        
        delete this.tickets[ticketId];
    }

}