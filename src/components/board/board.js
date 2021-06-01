import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {DragDropContext} from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import Column from '../column';
import {statusesSelector} from '../../redux/selectors';
import {loadTickets, сhangeStatus} from '../../redux/actions';

import styles from './board.module.css';

export let Board;
Board = ({boardId, statuses, loadTickets, changeStatusDispatcher}) => {
    useEffect(() => loadTickets(boardId), [loadTickets, boardId]);


    console.log(boardId);

    const onDragEnd = (result) => {
        const {draggableId, destination} = result;
        return destination ? changeStatusDispatcher(draggableId, destination.droppableId) : null;
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className={styles.board} data-id="board">
                {statuses.map((status) => (
                    <div className={styles.column} data-id="column-wrapper" key={status}>
                        <Column status={status}/>
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
    loadTickets: PropTypes.func,
    changeStatusDispatcher: PropTypes.func,
};

const mapStateToProps = (state) => ({
   statuses: statusesSelector(state),
});

const mapDispatchToProps = (dispatch) => {
    return ({
        loadTickets: (boardId) => dispatch(loadTickets(boardId)),
        changeStatusDispatcher: (ticketId, status) => dispatch(сhangeStatus(ticketId, status))
    });
};


export default connect(mapStateToProps, mapDispatchToProps) (Board);