import createElement from './createElement.js';
import Column from './column.js';
import Ticket from './ticket.js';
import Spinner from './spinner.js';
import config from '../config.js';

export default class Board {
    constructor(titles) {
        this.titles = titles;
        this.container = null;
        this.columns = {};
        this.tickets = {};
        this.render();
        this.showAllTickets();
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
        document.body.addEventListener('delete-ticket', this.onDeleteTicket);
        document.body.addEventListener('status-change', this.onChangeStatus);
    }

    onCreateTicket = (event) => {
        const ticketDetails = event.detail;
    
        this.addTicket(ticketDetails);
    }

    onDeleteTicket = (event) => {
        const ticketId = event.detail;
       
        this.removeTicket(ticketId);   
    }

    removeTicket(ticketId) {
        const ticket = this.tickets[ticketId];

        const column = this.columns[ticket.status];

        column.removeTicket(ticketId);
        delete this.tickets[ticketId];
    }

    addTicket(ticketDetails) {
       const ticket = new Ticket(ticketDetails);
       this.tickets[ticket.id] = ticket;
       ticket.render();

       const column = this.columns[ticket.status];
       column.addTicket(ticket); 
    }

    onChangeStatus = (event) => {
        const ticket = event.detail.ticket;
        const previousStatus = event.detail.statusBefore;
        const previousColumn = this.columns[previousStatus];
        const actualColumn = this.columns[ticket.status];

        previousColumn.removeTicket(ticket.id);
        actualColumn.addTicket(ticket);

    }

    showAllTickets = async () => {
        this.loadSpinner();

        try {
            const url = config.url;
            const response = await fetch (`${url}`);
            const allTickets = await response.json();

            allTickets.map((ticketDetails) => this.addTicket(ticketDetails));

            this.spinner.elem.remove();
        }
        catch(error) {
            this.spinner.onError();
            console.log(error);
        }
    }

    loadSpinner() {
        let spinner = new Spinner();
        this.spinner = spinner;
        document.body.append(this.spinner.elem);
    }





}