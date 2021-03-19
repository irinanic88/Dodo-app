import createElement from './createElement.js';
import Column from './column.js';

export default class Board {
    constructor(headings) {
        this.headings = headings;
        this.container = null;
        this.tickets = [];
        this.render();
    }

    get elem() {
       return this.container;
    }

    boardContainerTemplate() {
        return `
        <div class="board-container">
        </div>`;
    }

    renderColumns(headings) {
        headings.map((heading) => {
            let column = new Column(heading);
            this.container.append(column.elem);
        });
    }

    render() {
        let template = this.boardContainerTemplate();
        this.container = createElement(template);
        this.renderColumns(this.headings);

        this.addEventListeners();
    }

    addEventListeners(){
        document.body.addEventListener('create-ticket', this.onCreateTicket);
    }

    onCreateTicket = (event) => {
        console.log(event.detail);
    }


}