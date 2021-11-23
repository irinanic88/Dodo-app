import React from "react";

import { ReactComponent as Logo } from '../../assets/icons/logo.svg';

import styles from './header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <Logo className={styles.header__logo}/>
        </div>
    )
}

export default Header;