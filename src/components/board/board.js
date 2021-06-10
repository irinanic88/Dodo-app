import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {DragDropContext} from 'react-beautiful-dnd';
import PropTypes from 'prop-types';

import styles from './board.module.css';

import Column from '../column';
import {columns} from '../../columns';

import {
    loadStatuses,
    loadTickets,
    changeStatus
} from '../../redux/actions';

export let Board;
Board = ({
             boardId,
             loadTicketsDispatch,
             loadStatusesDispatch,
             changeStatusDispatch
}) => {

    useEffect(() => loadStatusesDispatch(columns), [loadStatusesDispatch]);
    useEffect(() => loadTicketsDispatch(), [loadTicketsDispatch]);

    const onDragEnd = (result) => {
        const {draggableId, destination} = result;


        return destination ? changeStatusDispatch(draggableId, destination.droppableId) : null;
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className={styles.board} data-id="board">
                {columns.map((column) => (
                    <div className={styles.column} data-id="column-wrapper" key={column}>
                        <Column boardId={boardId} column={column}/>
                    </div>
                ))}
            </div>
        </DragDropContext>
    );
};

Board.propTypes = {
    boardId: PropTypes.string.isRequired,
    columns: PropTypes.arrayOf(
            PropTypes.string,
        ),
    loadTicketsDispatch: PropTypes.func.isRequired,
    changeStatusDispatcher: PropTypes.func,
};

const mapDispatchToProps = (dispatch, props) => ({
        loadStatusesDispatch: (columns) => (dispatch(loadStatuses(columns, props.boardId))),
        loadTicketsDispatch: () => dispatch(loadTickets(props.boardId)),
        changeStatusDispatch: (ticketId, status) => dispatch(changeStatus(ticketId, props.boardId, status))
    });

export default connect(null, mapDispatchToProps) (Board);