import React from 'react';
import {useForm} from 'react-hook-form';
import { connect } from 'react-redux';
import Button from '../button';
import CloseButton from '../button/closeButton';
import {ticketSelector} from '../../redux/selectors';
import {closeDescriptionModal, сhangeStatus, deleteTicket} from '../../redux/actions';

import styles from './descriptionWindow.module.css';

const DescriptionWindow = ({
    allStatuses, 
    ticketId, 
    ticket, 
    closeDescriptionModal, 
    сhangeStatusDispatcher, 
    deleteTicketDispatcher
}) => {
    const {status, id, title, description} = ticket;
    const {register, handleSubmit} = useForm();

    return (
    <div className={styles.modal}>
        <div className={styles.modalOverlay} />
        <div className={styles.modalInner}>
            <div className={styles.modalHeader}>
                <p className={styles.ticketNumber}>
                   {id} 
                </p>
                <h2>
                   {title} 
                </h2>
                <p className={styles.ticketStatus}>Status: {status}</p>
                <CloseButton onClick={closeDescriptionModal}/>
            </div>
            <p className={styles.ticketDescription}>{description}</p>
            <div className={styles.modalDescriptionButtons}>
                <form onSubmit={handleSubmit(сhangeStatusDispatcher)} >
                    <label>Change status: </label>
                    <select {...register('status', {value: status})} className={styles.changeStatus}>
                        {allStatuses.map((item) =>
                            <option key={item} {...register(item)}>{item}</option> 
                        )}
                    </select>
                    <Button name={'Submit new status'} onClick={() => {}}/>
                </form>
                <Button name={'Delete ticket'} onClick={deleteTicketDispatcher}/>
            </div>
        </div>
    </div>
    );
};
const mapStateToProps = (state, props) => ({
    ticket: ticketSelector(state, props),
});
const mapDispatchToProps = (dispatch, props) => ({
    closeDescriptionModal: () => dispatch(closeDescriptionModal),
    сhangeStatusDispatcher: (options) => dispatch(сhangeStatus(props.ticketId, options.status)),
    deleteTicketDispatcher: () => dispatch(deleteTicket(props)),
});

export default connect(mapStateToProps, mapDispatchToProps) (DescriptionWindow);