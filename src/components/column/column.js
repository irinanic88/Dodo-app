import React from 'react';
import {connect} from 'react-redux';
import {Droppable} from 'react-beautiful-dnd';
import PropTypes from 'prop-types';

import {ticketsForColumnSelector} from '../../redux/selectors';

import styles from './column.module.scss';
import cn from 'classnames';

import Ticket from '../ticket';

export let Column = ({tickets, columnTitle, boardId}) => {

    return (
            <Droppable droppableId={columnTitle}>
                {(provided, snapshot) => {
                    const isDraggingOver = snapshot.isDraggingOver;

                    return (
                        <div className={styles.column} data-id="column">
                            <div className={styles.column__header}>
                                <h2 className={styles.column__title}>{columnTitle}</h2>
                            </div>

                            <div className={cn(styles.column__body,
                                {[styles.column__overColumn]: isDraggingOver}
                                )}
                                 ref={provided.innerRef}
                                 {...provided.droppableProps}>

                                {tickets.map((ticketId, index) =>
                                    <Ticket key={ticketId}
                                            ticketId={ticketId}
                                            boardId={boardId}
                                            index={index}/>)
                                }

                                {provided.placeholder}
                            </div>
                        </div>
                    );
                }
                }
            </Droppable>
    );
};

Column.propTypes = {
    status: PropTypes.string,
    tickets: PropTypes.arrayOf(PropTypes.string).isRequired,
    boardId: PropTypes.string,
}

const mapStateToProps = (state, props) => ({
    tickets: ticketsForColumnSelector(state, props),
});

export default connect(mapStateToProps)(Column);