import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {DragDropContext} from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import Column from '../column';
import {loadTickets, сhangeStatus} from '../../redux/actions';

import styles from './board.module.css';

export let Board;
Board = ({titles, loadTickets, changeStatusDispatcher}) => {
    useEffect(() => loadTickets(), [loadTickets]);

    const onDragEnd = (result) => {
        const {draggableId, destination} = result;
        return destination ? changeStatusDispatcher(draggableId, destination.droppableId) : null;
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className={styles.board} data-id="board">
                {titles.map((title) => (
                    <div className={styles.column} data-id="column-wrapper" key={title}>
                        <Column title={title}/>
                    </div>
                ))}
            </div>
        </DragDropContext>
    );
};

Board.propTypes = {
    titles: PropTypes.arrayOf(
            PropTypes.string,
        ).isRequired,
    loadTickets: PropTypes.func,
    changeStatusDispatcher: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
    loadTickets: () => dispatch(loadTickets),
    changeStatusDispatcher: (ticketId, status) => dispatch(сhangeStatus(ticketId, status))
});

export default connect(null, mapDispatchToProps) (Board);