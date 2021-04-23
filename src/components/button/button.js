import React from 'react';
import PropTypes from 'prop-types';

import styles from './button.module.css';

const Button = ({name}) => {
    if (name) {
        return (
            <button className={styles.button}>{name}</button>
        );
    }
};

Button.propTypes = {
    name: PropTypes.string,
}

export default Button;