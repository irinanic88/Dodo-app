import createElement from './createElement.js';
import Column from './column.js';
import Ticket from './ticket.js';

export default class Board {
    constructor(titles) {
        this.titles = titles;
        this.container = null;
        this.columns = {};
        this.tickets = [];
        this.render();
    }

    get elem() {
       return this.container;
    }

    boardContainerTemplate() {
        return `
        <div class="board-container">
        </div>`;
    }

    renderColumns(titles) {
        titles.map((title) => {
            const column = new Column(title);
            this.container.append(column.elem);

            this.columns[title] = column;
        });
    }

    render() {
        const template = this.boardContainerTemplate();
        this.container = createElement(template);
        this.renderColumns(this.titles);

        this.addEventListeners();
    }

    addEventListeners(){
        document.body.addEventListener('create-ticket', this.onCreateTicket);
    }

    onCreateTicket = (event) => {
        const ticket = event.detail;
        this.tickets.push(ticket);
        
        this.addTicket(ticket);
    }

    addTicket(ticketDetails) {
       const ticket = new Ticket(ticketDetails);
       ticket.render();

       const column = this.columns[ticketDetails.status];
       column.addTicket(ticket); 
    }

}