import {activateCloseButtons, activateCreateButton, openTicketDescription} from './script/functions.js';
import Board from './script/board.js';

activateCreateButton();
//openTicketDescription();
//activateCloseButtons();

export default class Main {
    constructor() {
        this.setElements();
    }

    setElements() {
        this.boardSection = document.querySelector('.board-section');
    }

    get boardHeadings() {
        return ['to do', 'in progress', 'on review', 'done'];
    }

    createBoard() {
        let board = new Board(this.boardHeadings);
        this.board = board;
        this.boardSection.append(this.board.elem);
    }

    render() {
        this.createBoard();
    }
}