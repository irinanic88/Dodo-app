import createElement from './createElement.js';
import ShowTicketModal from './modalDescription.js';

export default class Ticket {
    constructor (ticketDetails) {
        this.id = ticketDetails.id;
        this.status = ticketDetails.status;
        this.title = ticketDetails.title;
        this.description = ticketDetails.description;
        this.container = null;
    }

    get elem() {
        return this.container;
    }

    ticketTemplate({name, id}) {
        return `
        <div class="ticket" data-ticket-id="${id}">
            <div class="ticket-class-line"></div>
                 <div class="ticket-info">              
                    <p class="ticket-number">${id}</p>          
                    <p class="ticket-name">${name}</p>
                </div>
        </div>`;
    }

    render() {
        const template = this.ticketTemplate({
            name: this.title,
            id: this.id,
        });

        this.container = createElement(template);
        this.addEventListeners();
        //this.onChangeColumn();
    }

    addEventListeners() {
        this.container.addEventListener('click', this.onTicketClick);
    }

    onTicketClick = () => {
        const ticketDescriptionModal = new ShowTicketModal(this);
        let modalContainer = document.querySelector('.modal-description-container');
        modalContainer.append(ticketDescriptionModal.elem);
    }

    
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
        
    }
    
}


