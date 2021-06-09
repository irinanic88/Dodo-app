import React from 'react';
import PropTypes from 'prop-types';

import styles from './closeButton.module.css';

import { ReactComponent as CloseRound } from '../../../icons/closeRound.svg';
import { ReactComponent as CloseCross } from '../../../icons/closeCross.svg';

export const CloseButton = () => {
    return (
        <button className={styles.button}>
            <CloseCross className={styles.closeCross}/>
            <CloseRound className={styles.closeRound}/>
        </button>
    );
};

export default CloseButton;