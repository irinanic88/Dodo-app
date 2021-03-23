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
        //this.onChangeColumn();
    }

    addEventListeners() {
        this.container.addEventListener('click', this.onTicketClick);
    }

    onTicketClick = () => {
        const ticketDescriptionModal = new ShowTicketModal(this.ticket);
        let modalContainer = document.querySelector('.modal-description-container');
        modalContainer.append(ticketDescriptionModal.elem);
    }

    /*
    onChangeColumn() {
        this.container.addEventListener('dragstart', () => false);
        this.container.addEventListener('mousedown', this.onTicketMouseDown);
        document.addEventListener('mousemove', this.onTicketMouseMove);
        this.container.addEventListener('mouseup', this.onTicketMouseUp);
    }

    onTicketMouseDown = (event) => {
        this.container.style.position = 'absolute';
        this.container.style.zIndex = '1000';

        this.shiftX = event.clientX - this.container.getBoundingClientRect().left;
        this.shiftY = event.clientY - this.container.getBoundingClientRect().top;
     
        this.moveAt(event.pageX, event.pageY);
    }

    onTicketMouseMove = (event) => {
        this.moveAt(event.pageX, event.pageY);
    }

    onTicketMouseUp = () => {
        this.ticketChangeStatus();
        document.removeEventListener('mousemove', this.onTicketMouseMove, {once: true});
    }

    moveAt(pageX, pageY) {
        this.container.style.left = pageX - this.container.offsetWidth / 2 - this.shiftX + 'px';
        this.container.style.top = pageY - this.container.offsetHeight / 2 - this.shiftY + 'px';
    }

    ticketChangeStatus() {
        console.log(this.shiftX);
    }
    */
}


