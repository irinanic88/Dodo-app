import React from 'react';
import PropTypes from 'prop-types';

import styles from './column.module.css';

const Column = ({title}) => {
    return(
        <div className={styles.column} data-id="column">
            <div className={styles.header}>
                <h2>{title}</h2>
            </div>
            <div className={styles.body}>
            </div>
        </div> 
    );
};

Column.propTypes = {
    title: PropTypes.string,
}

export default Column;

