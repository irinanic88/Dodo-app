import React from 'react';
import PropTypes from 'prop-types';

import styles from './button.module.css';

export const Button = ({name, onClick, isDisabled}) => {
    return (
        <button data-id="button"
                className={styles.button}
                onClick={onClick}
                disabled={isDisabled}
        >
            {name}
        </button>
    );

};

Button.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool,
}

export default Button;