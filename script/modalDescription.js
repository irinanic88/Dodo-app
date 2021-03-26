import createElement from './createElement.js';
import config from '../config.js';

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
        this.deleteButton = this.container.querySelector('.modal-delete-ticket-button');
    }

    modalTemplate({title, number, description, status, changeStatusOptions}) {
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
            <div class="modal-description-buttons">
                <form>
                    <label for="status-change">Change status: </label>
                    <select id="status-change">
                    ${changeStatusOptions}
                    </select>
                    <button type="submit">Submit new status</button>
                </form>
                <button class="modal-delete-ticket-button" ticket-id="${number}">Delete ticket</button>
            </div>
        </div>
        </div>
    </div>`;
    }

    render() {
        const template = this.modalTemplate({
            title: this.ticket.title,
            number: this.ticket.id,
            description: this.ticket.description,
            status: this.ticket.status,
            changeStatusOptions: this.changeStatusOptions(this.ticket.status),
        });

        this.container = createElement(template);

        this.setElements();
        this.addEventListeners();
    }

    changeStatusOptions(currentStatus) {
        const allStatuses = config.titles;
        
        return allStatuses.map((string) => string.replace(' ', '-'))
                    .map((status) => {
                        if (status != currentStatus.replace(' ', '-')) {
                            return `<option value='${status}'>${status}</option> `;
                        }
                    })
                    .join('');

    }

    addEventListeners() {
        this.closeButton.addEventListener('click', () => this.elem.remove(), {once: true});
        this.deleteButton.addEventListener('click', this.onDeleteTicket);
    }

    onDeleteTicket = async (event) => {
        const target = event.target;
        const ticketId = target.getAttribute('ticket-id');

        const deleteTicket = new CustomEvent('delete-ticket', {
            bubbles: true,
            detail: ticketId
        });

        try {
            const url = config.url;
            const response = await fetch (`${url}${ticketId}/`, {
                method: 'DELETE'
            });

            if (response.status == 202) { 
                this.container.dispatchEvent(deleteTicket);

                this.container.remove();
            }
            
        } catch(error) {
            console.log(error);
        }
        
    }
}