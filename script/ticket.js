import createElement from './createElement.js';
import ShowTicketModal from './modalDescription.js';

export default class Ticket {
    constructor (ticket) {
        this.ticket = ticket;
        this.container = null;
    }

    get elem() {
        return this.container;
    }

    ticketTemplate({name, number}) {
        return `
        <div class="ticket">
            <div class="ticket-class-line"></div>
                 <div class="ticket-info">              
                    <p class="ticket-number">${number}</p>          
                    <p class="ticket-name">${name}</p>
                </div>
        </div>`;
    }

    render() {
        const template = this.ticketTemplate({
            name: this.ticket.title,
            number: this.ticket.id,
        });

        this.container = createElement(template);
        this.addEventListeners();
    }

    addEventListeners() {
        this.container.addEventListener('click', this.onTicketClick);
    }

    onTicketClick = () => {
        const ticketDescriptionModal = new ShowTicketModal(this.ticket);
        let modalContainer = document.querySelector('.modal-description-container');
        modalContainer.append(ticketDescriptionModal.elem);
    }
}

/*  */
