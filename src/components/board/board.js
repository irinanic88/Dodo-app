import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Column from '../column';
import {loadTickets} from '../../redux/actions';

import styles from './board.module.css';

const Board = ({boardInfo, loadTickets}) => {
    useEffect(() => loadTickets(), [loadTickets]);

    const {titles} = boardInfo;

    return(
            <div className={styles.board} data-id="board">
                {titles.map((title) => (
                    <Column key={title} title={title} />
                ))}
            </div>
    );
};

Board.propTypes = {
    boardInfo: PropTypes.shape({
        titles: PropTypes.arrayOf(
            PropTypes.string,
        ).isRequired,
    }).isRequired,
    loadTickets: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
    loadTickets: () => dispatch(loadTickets),
});

export default connect(null, mapDispatchToProps) (Board);