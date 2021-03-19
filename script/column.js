import createElement from './createElement.js';

export default class Column {
    constructor(heading) {
        this.heading = heading;
        this.container = null;
        this.render();
    }

    get elem() {
        return this.container;
    }

    columnTemplate(heading) {
        return `
        <div class="board-column">
            <div class="board-column-header">
                <h2>${heading}</h2>
            </div>
            <div class="board-column-body">
            </div>
        </div>`;
    }

    render() {
        let template = this.columnTemplate(this.heading);
        this.container = createElement(template);
    }

}