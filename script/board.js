import createElement from './createElement.js';
import Column from './column.js';
import Ticket from './ticket.js';
import Spinner from './spinner.js';

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

    showAllTickets = async () => {
        this.loadSpinner();

        try {
            const response = await fetch('http://localhost:5000/api/tickets/');
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