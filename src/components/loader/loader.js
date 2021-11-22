import React from 'react';
import { ReactComponent as LoaderIcon } from '../../icons/loader.svg';

import styles from './loader.module.scss';

const Loader = () => {
    return (
        <div className={styles.loader} data-id="loader">
            <LoaderIcon className={styles.loaderIcon}/>
        </div>
    );
};

export default Loader;