import createElement from './createElement.js';
import Spinner from './spinner.js';
import config from '../config.js';

export default class CreateTicketModal {
    constructor() {
        this.container = null;
        this.render();
    }

    get elem() {
        return this.container;
    }

    setElements() {
        this.closeButton = this.container.querySelector('.close-button');
        this.form = this.container.querySelector('.create-ticket-form');
        this.ticketTitle = this.container.querySelector('#create-title');
        this.ticketDescription = this.container.querySelector('#create-description');
    }

    modalTemplate() {
        return `
        <div class="modal" dataModal="modal-create">
            <div class="modal-overlay"></div>
            <div class="modal-inner">
                <button class="close-button"><i class="fa fa-times"></i></button>
                <form class="create-ticket-form">
                    <div class="form-element">
                        <label for="create-title" class="create-ticket-label">Title:</label>
                        <input type="text" id="create-title" maxlength="50" size="50" class="create-ticket-input" required>
                    </div>
                    <div class="form-element">
                        <label for="create-description" class="create-ticket-label">Description:</label>
                        <textarea type="text" id="create-description" size="2000" class="create-ticket-input description-input" required></textarea>
                    </div>
                    <button type="submit" class="submit-button">Create</button>
                </form>
            </div>
        </div>`;
    }

    render() {
        const template = this.modalTemplate();
        this.container = createElement(template);

        this.setElements();
        this.addEventListeners();
    }

    addEventListeners() {
        this.closeButton.addEventListener('click', () => this.elem.remove(), {once: true});
        this.form.addEventListener('submit', this.onSubmit);
    }

    onSubmit = async (event) => {
        event.preventDefault();

        this.loadSpinner();
        const formData = {
            status: 'to do',
            title: this.ticketTitle.value,
            description: this.ticketDescription.value
        }

        try {
            const url = config.url;
            const response = await fetch (`${url}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(formData)
            });

            const responseStatus = response.status;

            if (responseStatus > 299 || responseStatus < 200) {
                throw new Error('Error occured. Please, try again');
            }

            const result = await response.json();
        
                const createTicket = new CustomEvent('create-ticket', {
                    bubbles: true,
                    detail: {
                        status: 'to do',
                        title: result.title,
                        description: result.description,
                        id: result.id
                    }
                });
                
                this.container.dispatchEvent(createTicket);
    
                this.spinner.elem.remove();
                this.container.remove();

       } catch(error) {
           this.spinner.onError();
           console.log(error.message);
       }

    }

    loadSpinner() {
        let spinner = new Spinner();
        this.spinner = spinner;
        document.body.append(this.spinner.elem);
    }


}