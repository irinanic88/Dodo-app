import Board from './script/board.js';
import CreateTicketModal from './script/modalCreate.js';
export default class Main {
    constructor() {
        this.setElements();
    }

    setElements() {
        this.boardSection = document.querySelector('.board-section');
        this.buttonCreate = document.querySelector('.create-button');
        this.modalCreatecontainer = document.querySelector('.modal-create-container');
    }

    get boardTitles() {
        return ['to do', 'in progress', 'on review', 'done'];
    }

    createBoard() {
        let board = new Board(this.boardTitles);
        this.board = board;
        this.boardSection.append(this.board.elem);
    }

    render() {
        this.createBoard();
        this.addEventListeners();
    }

    addEventListeners() {
        this.buttonCreate.addEventListener('click', this.onCreateClick);
    }

    onCreateClick = () => {
        let modalCreate = new CreateTicketModal();
        this.modalCreatecontainer.append(modalCreate.elem);
    }
}