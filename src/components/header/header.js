import React from 'react';
import Button from '../button';
import {connect} from 'react-redux';

import {openCreateTicketModal} from '../../redux/actions';

import styles from './header.module.css';

export const Header = ({boardId, openCreateTicketModal}) => {
     
    return(
        <div className={styles.header} data-id="header">
            <h2>Board: {boardId}</h2>
            <Button name={'New ticket'} onClick={openCreateTicketModal}/>
        </div>
    );
};
  
const mapDispatchToProps = (dispatch) => ({
    openCreateTicketModal: () => dispatch(openCreateTicketModal),
});

export default connect(null, mapDispatchToProps) (Header);