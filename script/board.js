import createElement from './createElement.js';

export default class Board {
    constructor(headings) {
        this.headings = headings;
        this.container = null;
        this.render();
    }

    get elem() {
       return this.container;
    }

    boardColumnTemplate(heading) {
        return `
        <div class="board-column">
            <div class="board-column-header">
                <h2>${heading}</h2>
            </div>
            <div class="board-column-body">
            </div>
        </div>`;
    }

    boardTemplate(headings) {
        return `
        <div class="board-container">
        ${this.renderColumns(headings)}
        </div>`;
    }

    renderColumns(headings) {
        return headings.map((heading) => this.boardColumnTemplate(heading)).join('');
    }

    render() {
        let template = this.boardTemplate(this.headings);
        this.container = createElement(template);
    }
}