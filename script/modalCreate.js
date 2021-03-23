import createElement from './createElement.js';

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

        const formData = {
            status: 'to do',
            title: this.ticketTitle.value,
            description: this.ticketDescription.value
        }

        const response = await fetch('http://localhost:5000/api/tickets/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
            body: JSON.stringify(formData)
        });

        const responseStatus = response.status;

        if (responseStatus < 300 && responseStatus > 199) {
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
    
            this.container.remove();
    
        } else {
            console.log('Error: ' + responseStatus);
        }

        
    }


}