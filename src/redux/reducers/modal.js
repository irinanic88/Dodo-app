import {
    OPEN_CREATE_TICKET_MODAL, 
    CLOSE_CREATE_TICKET_MODAL, 
    OPEN_DESCRIPTION_MODAL,
    CLOSE_DESCRIPTION_MODAL,
    CREATE_TICKET, 
    DELETE_TICKET,
    SUCCESS
} from '../actionTypes';

const initialModalState = {
    displayCreateTicketWindow: false,
    displayDescriptionWindow: {
        display: false,
        ticketId: null,
    },
};

const modal = (state = initialModalState, action) => {
    const {type, ticketId} = action;
    switch(type) {
        case OPEN_CREATE_TICKET_MODAL:
            return {...state, displayCreateTicketWindow: true};
        case CLOSE_CREATE_TICKET_MODAL:
            return {...state, displayCreateTicketWindow: false};
        case CREATE_TICKET + SUCCESS:
            return {...state, displayCreateTicketWindow: false};
        case OPEN_DESCRIPTION_MODAL:
            return {...state,
            displayDescriptionWindow: {
                display: true, 
                ticketId: ticketId,
            } 
        };
        case CLOSE_DESCRIPTION_MODAL:
            return {...state,
            displayDescriptionWindow: {
                display: false, 
            } 
        };   
        case DELETE_TICKET + SUCCESS:
            return {...state, displayDescriptionWindow: false}; 
        default:
            return state;
    }       
};

export default modal;