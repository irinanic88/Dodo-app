import React from "react";
import { Link } from "react-router-dom";

import styles from './header.module.css';

import { ReactComponent as Logo } from '../../assets/icons/logo.svg';

const Header = () => {
    return (
        <div className={styles.header}>
            <Link to='/'>
                <Logo className={styles.header__logo}/>
            </Link>
        </div>
    )
}

export default Header;