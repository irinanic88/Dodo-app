import React from "react";

import { ReactComponent as LogoIcon } from '../../icons/logo.svg';

import styles from './logo.module.css';

const Logo = () => {
    return (
        <div>
            <LogoIcon className={styles.logo}/>
        </div>
    )
}

export default Logo;