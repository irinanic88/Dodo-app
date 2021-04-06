import React from 'react';
import styles from './header.module.css';

const Header = () => {
    return(
        <div className={styles.header}>
            <h1>My scrum board</h1>
            <button className={styles.button}>New ticket</button>
        </div>
    );
};

export default Header;