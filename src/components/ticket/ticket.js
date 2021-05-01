import React from 'react';
import { connect } from 'react-redux';
import {openDescriptionModal} from '../../redux/actions';

import styles from './ticket.module.css';

const Ticket = ({openDescriptionModal, ticket}) => {
    const {id, title} = ticket;
    return (
        <div onClick={openDescriptionModal} className={styles.ticket}>
            <div className={styles.ticketClassLine} />
                <div className={styles.ticketInfo}>              
                    <p className={styles.ticketNumber}>{id}</p>          
                    <p className={styles.ticketName}>{title}</p>
                </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch, props) => ({
    openDescriptionModal: () => dispatch(openDescriptionModal(props)),
});

export default connect(null, mapDispatchToProps) (Ticket);
