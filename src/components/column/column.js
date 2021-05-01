import React from 'react';
import Ticket from '../ticket';
import { ticketsForColumnSelector } from '../../redux/selectors';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import styles from './column.module.css';

const Column = ({title, tickets}) => {
    return(
        <div className={styles.column} data-id="column">
            <div className={styles.header}>
                <h2>{title}</h2>
            </div>
            <div className={styles.body}>
                {tickets.map((ticket) => <Ticket key={ticket.id} ticket={ticket} />)}     
            </div>
        </div> 
    );
};

Column.propTypes = {
    title: PropTypes.string,
    tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const mapStateToProps = (state, props) => ({
    tickets: ticketsForColumnSelector(state, props),
});

export default connect(mapStateToProps) (Column);

