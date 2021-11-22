import React from 'react';
import {connect} from 'react-redux';
import {Droppable} from 'react-beautiful-dnd';
import PropTypes from 'prop-types';

import styles from './column.module.scss';
import cn from 'classnames';

import Ticket from '../ticket';

import {ticketsForColumnSelector} from '../../redux/selectors';

export let Column;
Column = ({tickets, columnTitle, boardId}) => {

    return (
        <Droppable droppableId={columnTitle}>
            {(provided, snapshot) => {
                const isDraggingOver = snapshot.isDraggingOver;
                return (
                    <div
                        className={cn(styles.column, {[styles.overColumn]: isDraggingOver})}
                         data-id="column"
                         ref={provided.innerRef}
                         {...provided.droppableProps}
                    >
                        <div className={styles.header}>
                            <h2>{columnTitle}</h2>
                        </div>
                        <div className={styles.headerBottomLine}/>
                        <div className={styles.body}>
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