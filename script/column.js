import createElement from './createElement.js';

export default class Column {
    constructor(title) {
        this.title = title;
        this.container = null;
        this.render();
    }

    get elem() {
        return this.container;
    }

    columnTemplate(title) {
        return `
        <div class="board-column">
            <div class="board-column-header">
                <h2>${title}</h2>
            </div>
            <div class="board-column-body">
            </div>
        </div>`;
    }

    render() {
        let template = this.columnTemplate(this.title);
        this.container = createElement(template);
    }

}