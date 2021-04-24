import React from 'react';
import Button from '../button';
import styles from './header.module.css';
import CloseButton from '../button/closeButton';

const Header = () => {
    return(
        <div className={styles.header}>
            <h1>My scrum board</h1>
            <Button name={'New ticket'} />
        </div>
    );
};

export default Header;