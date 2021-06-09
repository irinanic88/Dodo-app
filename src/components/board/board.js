import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {DragDropContext} from 'react-beautiful-dnd';
import PropTypes from 'prop-types';

import styles from './board.module.css';

import Column from '../column';

import {statusesSelector} from '../../redux/selectors';
import {loadTickets, changeStatus} from '../../redux/actions';

export let Board;
Board = ({boardId, statuses, loadTicketsDispatch, changeStatusDispatcher}) => {
    useEffect(() => loadTicketsDispatch(boardId), [loadTicketsDispatch, boardId]);

    const onDragEnd = (result) => {
        const {draggableId, destination} = result;
        return destination ? changeStatusDispatcher(draggableId, destination.droppableId) : null;
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className={styles.board} data-id="board">
                {statuses.map((status) => (
                    <div className={styles.column} data-id="column-wrapper" key={status}>
                        <Column boardId={boardId} status={status}/>
                    </div>
                ))}
            </div>
        </DragDropContext>
    );
};

Board.propTypes = {
    boardId: PropTypes.string.isRequired,
    statuses: PropTypes.arrayOf(
            PropTypes.string,
        ).isRequired,
    loadTicketsDispatch: PropTypes.func.isRequired,
    changeStatusDispatcher: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
   statuses: statusesSelector(state),
});

const mapDispatchToProps = (dispatch, props) => ({
        loadTicketsDispatch: (boardId) => dispatch(loadTickets(boardId)),
        changeStatusDispatcher: (ticketId, status) => dispatch(changeStatus(ticketId, props.boardId, status))
    });

export default connect(mapStateToProps, mapDispatchToProps) (Board);