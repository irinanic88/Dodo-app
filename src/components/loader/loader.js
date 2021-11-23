import React from 'react';

import styles from './loader.module.scss';

import { ReactComponent as LoaderIcon } from '../../assets/icons/loader.svg';

const Loader = () => {
    return (
        <div className={styles.loader} data-id="loader">
            <LoaderIcon className={styles.loaderIcon}/>
        </div>
    );
};

export default Loader;