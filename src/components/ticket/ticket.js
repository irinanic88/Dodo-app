import React from 'react';
import {Draggable} from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import cn from 'classnames';
import {openDescriptionModal} from '../../redux/actions';
import {ticketSelector} from '../../redux/selectors';

import styles from './ticket.module.css';
import {ticketIdSelector} from "../../redux/selectors";

export let Ticket;
Ticket = ({openDescriptionModal, ticketId, index, ticket}) => {
    console.log(ticketId);
    const {id, title} = ticket;

    return (
        <Draggable draggableId={id.toString()} index={index}>
            {(provided, snapshot) => {
                const isDragging = snapshot.isDragging;
                return (
                    <div onClick={openDescriptionModal}
                         className={cn(styles.ticket, {[styles.drag]: isDragging})}
                         ref={provided.innerRef}
                         {...provided.draggableProps}
                         {...provided.dragHandleProps}
                    >
                        <div className={styles.info}>
                            <p className={styles.name}>{title}</p>
                            <p className={styles.number}>{id}</p>
                        </div>
                    </div>
                    )
                }
            }
        </Draggable>
    );
};

const mapStateToProps = (state, props) => ({
    ticket: ticketSelector(state, props),
});

const mapDispatchToProps = (dispatch, props) => ({
    openDescriptionModal: () => dispatch(openDescriptionModal(props)),
});

export default connect(mapStateToProps, mapDispatchToProps) (Ticket);