import React from 'react';
import PropTypes from 'prop-types';

import styles from './closeButton.module.css';

import { ReactComponent as CloseRound } from '../../loader/icons/closeRound.svg';
import { ReactComponent as CloseCross } from '../../loader/icons/closeCross.svg';

export const CloseButton = ({onClick}) => {
    return (
        <button className={styles.button} onClick={onClick}>
            <CloseCross className={styles.closeCross}/>
            <CloseRound className={styles.closeRound}/>
        </button>
    );
};

CloseButton.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default CloseButton;