import React from 'react';
import PropTypes from 'prop-types';
import Column from '../column';

import styles from './board.module.css';

const Board = ({boardInfo}) => {
    const {titles} = boardInfo;

    return(
            <div className={styles.board} data-id="board">
                {titles.map((title, index) => (
                    <Column key={index} title={title} />
                ))}
            </div>
    );
}

Board.propTypes = {
    boardInfo: PropTypes.shape({
        titles: PropTypes.arrayOf(
            PropTypes.string,
        ).isRequired,
    }).isRequired,
}

export default Board;