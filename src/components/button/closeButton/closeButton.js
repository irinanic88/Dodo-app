import React from 'react';
import { ReactComponent as CloseIcon } from '../../../icons/closeIcon.svg';

import styles from './closeButton.module.css';

const CloseButton = ({onClick}) => {
    return (
        <button className={styles.closeButton}>
            <CloseIcon className={styles.closeIcon} onClick={onClick}/>
        </button>
    );
};

export default CloseButton;