import React, { useState } from 'react';
import Button from '../button';
import styles from './header.module.css';

const Header = () => {
    const handleClic = () => {}
       
    return(
        <div className={styles.header}>
            <h1>My scrum board</h1>
            <Button name={'New ticket'} onClick={handleClic}/>
        </div>
    );
};

export default Header;