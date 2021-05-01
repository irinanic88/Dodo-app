import React from 'react';
import {useForm} from 'react-hook-form';
import { connect } from 'react-redux';
import Button from '../button';
import CloseButton from '../button/closeButton';
import {ticketSelector} from '../../redux/selectors';
import {closeDescriptionModal} from '../../redux/actions';
import styles from './descriptionWindow.module.css';

const DescriptionWindow = ({ticketId, ticket, closeDescriptionModal}) => {
    console.log(ticketId);
    const {status, id, title, description} = ticket;
    const {register, handleSubmit} = useForm();
    const onChangeStatus = () => {};

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
                <form onSubmit={handleSubmit(onChangeStatus)} >
                    <label>Change status: </label>
                    <select {...register('status')} className={styles.changeStatus}>
                            <option value="to do">to do</option>
                            <option value="in progress">in progress</option>
                            <option value="on review">on review</option>
                            <option value="done">done</option>
                        </select>
                    <Button name={'Submit new status'} onClick={() => {}}/>
                </form>
                <Button name={'Delete ticket'} onClick={() => console.log('Delete')}/>
            </div>
        </div>
    </div>
    );
};
const mapStateToProps = (state, props) => ({
    ticket: ticketSelector(state, props),
});
const mapDispatchToProps = (dispatch) => ({
    closeDescriptionModal: () => dispatch(closeDescriptionModal),
});

export default connect(mapStateToProps, mapDispatchToProps) (DescriptionWindow);