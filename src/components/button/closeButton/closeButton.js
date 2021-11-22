import React from 'react';

import styles from './closeButton.module.scss';

import { ReactComponent as CloseRound } from '../../../icons/closeRound.svg';
import { ReactComponent as CloseCross } from '../../../icons/closeCross.svg';

export const CloseButton = () => {
    return (
        <button className={styles.button} data-id="closeButton">
            <CloseCross className={styles.closeCross}/>
            <CloseRound className={styles.closeRound}/>
        </button>
    );
};

export default CloseButton;