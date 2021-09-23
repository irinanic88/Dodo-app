import React from 'react';
import PropTypes from 'prop-types';

import styles from './button.module.css';
import cn from 'classnames';

export const Button = ({name, onClick, isDisabled, isAlternate}) => {
    return (
        <button data-id="button"
                className={cn(styles.button, {[styles.button_alternate]: isAlternate})}
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
    isAlternate: PropTypes.bool,
}

export default Button;