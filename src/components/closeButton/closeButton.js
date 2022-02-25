import React from 'react';

import styles from './closeButton.module.scss';

import { ReactComponent as CloseIcon } from '@icons/close.svg';

const Close = () => {
    return (
        <button className={styles.closeButton} aria-label="close">
            <CloseIcon className={styles.closeButton__icon} />
        </button>
    );
};

export default Close;