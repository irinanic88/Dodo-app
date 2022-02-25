import React from "react";
import { Link } from "react-router-dom";

import styles from './header.module.scss';

import { ReactComponent as Logo } from '@icons/logo.svg';

const Header = () => {
    return (
        <header className={styles.header} data-id="header">
            <Link to='/' aria-label="main-page">
                <Logo className={styles.header__logo}/>
            </Link>
        </header>
    )
}

export default Header;