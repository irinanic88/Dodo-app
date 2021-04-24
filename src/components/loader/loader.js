import React from 'react';
import { ReactComponent as LoaderIcon } from '../../icons/loader.svg';

import styles from './loader.module.css';

const Loader = () => {
    return (
        <div className={styles.loader}>
            <LoaderIcon className={styles.loaderIcon}/>
        </div>
    );
};

export default Loader;