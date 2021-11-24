import React from 'react';
import PropTypes from 'prop-types';

import styles from './button.module.scss';
import cn from 'classnames';

export const Button = ({
   name,
   onClick,
   isDisabled,
   buttonStyle='primary'
}) => {
    return (
        <button data-id="button"
                className={cn(styles.button, {
                    [styles.button__primary]: buttonStyle === 'primary',
                    [styles.button__secondary]: buttonStyle === 'secondary'
                })}
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
    buttonStyle: PropTypes.string,
}

export default Button;