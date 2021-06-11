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
        const {draggableId, destination, source} = result;

        if(!destination) {
            return;
        }

        if(source.droppableId === destination.droppableId && source.index === destination.index) {
            return;
        }

       return changeStatusDispatch(draggableId, source.droppableId, destination.droppableId, destination.index);
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
        changeStatusDispatch: (ticketId, sourceColumnTitle, destinationColumnTitle, destinationIndex) =>
            dispatch(changeStatus(ticketId, sourceColumnTitle, destinationColumnTitle, destinationIndex, props.boardId))
    });

export default connect(null, mapDispatchToProps) (Board);
