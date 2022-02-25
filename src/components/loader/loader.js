import React from 'react';

import styles from './loader.module.scss';

import { ReactComponent as LoaderIcon } from '@icons/loader.svg';

const Loader = () => {
    return (
        <div className={styles.loader} data-id="loader">
            <div className={styles.loader__container}>
                <LoaderIcon className={styles.loader__icon}/>
            </div>
        </div>
    );
};

export default Loader;