import React from 'react';
import { connect } from 'react-redux';

import {Draggable} from 'react-beautiful-dnd';
import {Link} from 'react-router-dom';

import {ticketSelector} from '../../redux/selectors';

import cn from 'classnames';
import styles from './ticket.module.css';

export let Ticket;
Ticket = ({ticketId, boardId, index, ticket}) => {

    const {id, title} = ticket;

    return (
        <Draggable draggableId={id.toString()} index={index}>
            {(provided, snapshot) => {
                const isDragging = snapshot.isDragging;
                return (
                    <Link to={`/board/${boardId}/tickets/${ticketId}`}>
                        <div
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
                    </Link>
                    )
                }
            }
        </Draggable>
    );
};

const mapStateToProps = (state, props) => ({
    ticket: ticketSelector(state, props.ticketId),
});

export default connect(mapStateToProps) (Ticket);