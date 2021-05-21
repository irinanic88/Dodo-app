import React from 'react';
import {useForm} from 'react-hook-form';
import cn from 'classnames';
import { connect } from 'react-redux';
import Button from '../button';
import {ticketSelector} from '../../redux/selectors';
import {closeDescriptionModal, сhangeStatus, deleteTicket} from '../../redux/actions';

import styles from './descriptionWindow.module.css';
import CloseButton from '../button/closeButton/closeButton';

const DescriptionWindow = ({
    allStatuses, 
    ticket, 
    closeDescriptionModal, 
    сhangeStatusDispatcher, 
    deleteTicketDispatcher
}) => {
    const {status, id, title, description} = ticket;
    const {register, handleSubmit} = useForm();

    return (
    <div className={styles.modal} data-id="descriptionWindow">
        <div className={styles.overlay} />
        <div className={styles.inner}>
            <CloseButton onClick={closeDescriptionModal} />
            <h2 className={cn(styles.element, styles.title)}>{title}</h2>
            <p className={cn(styles.element, styles.number)}>{id}</p>
            <p className={cn(styles.element, styles.description)}>{description}</p>
            <div className={styles.options}>
                <form className={cn(styles.element, styles.form)}
                    onSubmit={handleSubmit(сhangeStatusDispatcher)} >
                    <label className={styles.statusLabel}>Change status: </label>
                    <select {...register('status', {value: status})} className={styles.statusInput}>
                            {allStatuses.map((item) =>
                            <option key={item} {...register(item)}>{item}</option> 
                        )}
                    </select>
                    <button className={styles.submit} onClick={()=>{}}>Submit</button>
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