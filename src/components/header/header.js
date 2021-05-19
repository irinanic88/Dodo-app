import React from 'react';
import Button from '../button';
import {connect} from 'react-redux';

import {openCreateTicketModal} from '../../redux/actions';

import styles from './header.module.css';

const Header = ({openCreateTicketModal}) => {
     
    return(
        <div className={styles.header}>
            <Button name={'New ticket'} onClick={openCreateTicketModal}/>
        </div>
    );
};
  
const mapDispatchToProps = (dispatch) => ({
    openCreateTicketModal: () => dispatch(openCreateTicketModal),
});

export default connect(null, mapDispatchToProps) (Header);