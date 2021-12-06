import React from 'react';

import styles from './closeButton.module.scss';

import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';

const Close = () => {
    return (
        <div className={styles.closeButton}>
            <CloseIcon className={styles.closeButton__icon} />
        </div>
    );
};

export default Close;