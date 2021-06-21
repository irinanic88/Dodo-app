import React, {useState} from 'react';
import { ReactComponent as CloseRound } from '../../../icons/closeRound.svg';
import { ReactComponent as CloseCross } from '../../../icons/closeCross.svg';

import styles from './closeButton.module.css';

export const CloseButton = ({onClick}) => {
    return (
        <button className={styles.button} onClick={onClick} data-id="closeButton">
            <CloseCross className={styles.closeCross}/>
            <CloseRound className={styles.closeRound}/>
        </button>
    );
};

export default CloseButton;