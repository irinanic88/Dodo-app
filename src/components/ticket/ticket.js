import React from 'react';
import {Draggable} from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import {openDescriptionModal} from '../../redux/actions';

import styles from './ticket.module.css';

const Ticket = ({openDescriptionModal, ticket, index}) => {
    const {id, title} = ticket;
    return (
        <Draggable draggableId={id.toString()} index={index}>
            {(provided) => (
                <div onClick={openDescriptionModal} 
                        className={styles.ticket}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        >
                    <div className={styles.ticketClassLine} />
                        <div className={styles.ticketInfo}>              
                            <p className={styles.ticketNumber}>{id}</p>          
                            <p className={styles.ticketName}>{title}</p>
                    </div>
                </div>
            )}
        </Draggable>
    );
};

const mapDispatchToProps = (dispatch, props) => ({
    openDescriptionModal: () => dispatch(openDescriptionModal(props)),
});

export default connect(null, mapDispatchToProps) (Ticket);
