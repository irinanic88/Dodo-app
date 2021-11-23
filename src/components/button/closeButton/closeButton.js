import React from 'react';

import styles from './closeButton.module.scss';

import { ReactComponent as CloseRound } from '../../../assets/icons/closeRound.svg';
import { ReactComponent as CloseCross } from '../../../assets/icons/closeCross.svg';

export const CloseButton = () => {
    return (
        <button className={styles.button} data-id="closeButton">
            <CloseCross className={styles.closeCross}/>
            <CloseRound className={styles.closeRound}/>
        </button>
    );
};

export default CloseButton;