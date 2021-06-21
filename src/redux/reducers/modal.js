import {
    OPEN_CREATE_TICKET_MODAL, 
    CLOSE_CREATE_TICKET_MODAL, 
    OPEN_DESCRIPTION_MODAL,
    CLOSE_DESCRIPTION_MODAL,
    CREATE_TICKET, 
    CHANGE_TICKET_STATUS,
    DELETE_TICKET,
    SUCCESS
} from '../actionTypes';

const initialModalState = {
    displayCreateTicketWindow: {
        display: false,
    },
    displayDescriptionWindow: {
        display: false,
        ticketId: null,
    },
};

const modal = (state = initialModalState, action) => {
    const {type, ticketId} = action;
    switch(type) {
        case OPEN_CREATE_TICKET_MODAL:
            return {...state,
                displayCreateTicketWindow: {
                    display: true,
                }
            };
        case CLOSE_CREATE_TICKET_MODAL:
            return {
                ...state,
                displayCreateTicketWindow: {
                    display: false,
                }
            };
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
        case CHANGE_TICKET_STATUS + SUCCESS: {
            return {...state, displayDescriptionWindow: false}; 
        }   
        case DELETE_TICKET + SUCCESS:
            return {...state, displayDescriptionWindow: false}; 
        default:
            return state;
    }       
};

export default modal;