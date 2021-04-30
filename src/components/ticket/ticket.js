import React from 'react';

import styles from './ticket.module.css';

const Ticket = ({ticket}) => {
    return (
        <div className={styles.ticket}>
        <div className={styles.ticketClassLine}></div>
             <div className={styles.ticketInfo}>              
                <p className={styles.ticketNumber}>{ticket.id}</p>          
                <p className={styles.ticketName}>{ticket.title}</p>
            </div>
    </div>
    );
};

export default Ticket;
