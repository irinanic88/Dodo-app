import createElement from './createElement.js';

export default class ShowTicketModal {
    constructor(ticket) {
        this.ticket = ticket;
        this.container = null;
        this.render();
    }

    get elem() {
        return this.container;
    }

    setElements() {
        this.closeButton = this.container.querySelector('.close-button');
    }

    modalTemplate({title, number, description, status}) {
        return `
        <div class="modal" dataModal="modal-description">
            <div class="modal-overlay"></div>
            <div class="modal-inner">
                <div class="modal-header">
                    <p class="ticket-number">${number}</p>
                    <h2>${title}</h2>
                    <p class="ticket-status">Status: ${status}</p>
                    <button class="close-button"><i class="fa fa-times"></i></button>
                </div>
                <p class="ticket-description">${description}</p>
            </div>
        </div> `;
    }

    render() {
        const template = this.modalTemplate({
            title: this.ticket.title,
            number: this.ticket.id,
            description: this.ticket.description,
            status: this.ticket.status
        });

        this.container = createElement(template);

        this.setElements();
        this.addEventListeners();

    }

    addEventListeners() {
        this.closeButton.addEventListener('click', () => this.elem.remove(), {once: true});
    }
}