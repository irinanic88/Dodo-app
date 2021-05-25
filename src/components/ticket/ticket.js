import React from 'react';
import {Draggable} from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import cn from 'classnames';
import {openDescriptionModal} from '../../redux/actions';

import styles from './ticket.module.css';

export let Ticket;
Ticket = ({openDescriptionModal, ticket, index}) => {
    const {id, title, status} = ticket;

    return (
        <Draggable draggableId={id.toString()} index={index}>
            {(provided) => (
                <div data-id="ticket"
                     onClick={openDescriptionModal}
                     className={styles.ticket}
                     ref={provided.innerRef}
                     {...provided.draggableProps}
                     {...provided.dragHandleProps}
                >
                    <div className={cn(styles.line, {
                        [styles.first]: status === 'to do',
                        [styles.second]: status === 'in progress',
                        [styles.third]: status === 'in review',
                        [styles.fourth]: status === 'done',
                    })}
                    />
                    <div className={styles.info}>
                        <p className={styles.name} data-id="title">{title}</p>
                        <p className={styles.number} data-id="number">{id}</p>
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