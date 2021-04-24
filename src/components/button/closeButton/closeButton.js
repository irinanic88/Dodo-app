import React from 'react';
import { ReactComponent as CloseIcon } from '../../../icons/closeIcon.svg';

import styles from './closeButton.module.css';

const CloseButton = () => {
    return (
        <button className={styles.closeButton}>
            <CloseIcon className={styles.closeIcon}/>
        </button>
    );
};

export default CloseButton;