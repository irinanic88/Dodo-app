import React from 'react';

import styles from './logo.module.css';

const Logo = () => {
    return (
        <div className={styles.logo}>
            <div className={styles.logo__bg}></div>
            <div className={styles.logo__name}>Dodo</div>
            <div className={styles.logo__stroke}></div>
        </div>
    );
}

export default Logo;