function activateCreateButton() {
    const createButton = document.querySelector('.create-button');
    const createModal = document.querySelector('[dataModal="modal-create"]');
   
    createButton.addEventListener('click', () => createModal.style.display = 'block');
}

function activateCloseButtons() {
    const createModalClose = document.querySelectorAll('.close-button')[1];
    const descriptionModalClose = document.querySelectorAll('.close-button')[0];
    
    
    let onCloseClick = (event) => {
        let target = event.target;
        let modalWindow = target.closest('[class="modal"]');
        modalWindow.style.display = 'none';
    };
    
    createModalClose.addEventListener('click', onCloseClick);
    descriptionModalClose.addEventListener('click', onCloseClick);
} 

function openTicketDescription() {
    const ticket = document.querySelector('.ticket');
    const descriptionModal = document.querySelector('[dataModal="modal-description"]');

    ticket.addEventListener('click', () => descriptionModal.style.display = 'block');
}

activateCreateButton();
openTicketDescription();
activateCloseButtons();