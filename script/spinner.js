import createElement from './createElement.js';

export default class Spinner {
    constructor() {
        this.container = null;
        this.render();
    }

    get elem() {
        return this.container;
    }

    spinnerTemplate() {
        return `
        <div id="spinner">
            <i class="fa fa-spinner"></i>
        </div>`;
    }

    render() {
        const template = this.spinnerTemplate();
        this.container = createElement(template);
    }

    onError() {
        this.container.innerHTML = 'Error occured. Please, try again';
        this.container.classList.add('error-message');
        
        setTimeout(() => this.container.remove(), 1500);
    }
}