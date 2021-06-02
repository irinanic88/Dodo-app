import React from 'react';
import {useForm} from 'react-hook-form';
import cn from 'classnames';
import { connect } from 'react-redux';
import Button from '../button';
import {statusesSelector, ticketSelector} from '../../redux/selectors';
import {closeDescriptionModal, changeStatus, deleteTicket} from '../../redux/actions';

import styles from './descriptionWindow.module.css';
import CloseButton from '../button/closeButton/closeButton';

const DescriptionWindow = ({
    statuses,
    boardId,
    ticket, 
    closeDescriptionModal, 
    changeStatusDispatcher,
    deleteTicketDispatcher
}) => {
    const {status, id, title, description} = ticket;
    const {register, getValues} = useForm();
    const handleChangeStatus = (event) => {
        event.preventDefault();
        const newStatus = getValues('status');
        return changeStatusDispatcher(newStatus);
    };

    return (
    <div className={styles.modal} data-id="descriptionWindow">
        <div className={styles.overlay} />
        <div className={styles.inner}>
            <CloseButton onClick={closeDescriptionModal} />
            <h2 className={cn(styles.element, styles.title)}>{title}</h2>
            <p className={cn(styles.element, styles.number)}>{id}</p>
            <p className={cn(styles.element, styles.description)}>{description}</p>
            <div className={styles.options}>
                <form className={cn(styles.element, styles.form)}>
                    <label className={styles.statusLabel}>Change status: </label>
                    <select {...register('status', {value: status})} className={styles.statusInput}>
                            {statuses.map((item) =>
                            <option key={item} {...register(item)}>{item}</option> 
                        )}
                    </select>
                    <button className={styles.submit} onClick={handleChangeStatus}>Submit</button>
                </form>
                <Button name={'Delete ticket'} onClick={deleteTicketDispatcher}/>
            </div>
        </div>
    </div>
    );
};
const mapStateToProps = (state, props) => ({
    statuses: statusesSelector(state),
    ticket: ticketSelector(state, props),
});
const mapDispatchToProps = (dispatch, props) => ({
    closeDescriptionModal: () => dispatch(closeDescriptionModal),
    changeStatusDispatcher: (newStatus) => dispatch(changeStatus(props.ticketId, props.boardId, newStatus)),
    deleteTicketDispatcher: () => dispatch(deleteTicket(props)),
});

export default connect(mapStateToProps, mapDispatchToProps) (DescriptionWindow);