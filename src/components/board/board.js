import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Column from '../column';
import {loadTickets} from '../../redux/actions';

import styles from './board.module.css';

const Board = ({titles, loadTickets}) => {
    useEffect(() => loadTickets(), [loadTickets]);

    return(
            <div className={styles.board} data-id="board">
                {titles.map((title) => (
                    <Column key={title} title={title} />
                ))}
            </div>
    );
};

Board.propTypes = {
    titles: PropTypes.arrayOf(
            PropTypes.string,
        ).isRequired,
    loadTickets: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
    loadTickets: () => dispatch(loadTickets),
});

export default connect(null, mapDispatchToProps) (Board);