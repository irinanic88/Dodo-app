import React from 'react';
import PropTypes from 'prop-types';

import styles from './button.module.css';

const Button = ({name, onClick}) => {
    return (
        <button className={styles.button} onClick={onClick}>{name}</button>
    );

};

Button.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

export default Button;