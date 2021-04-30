import React from 'react';
import {useForm} from 'react-hook-form';
import {connect} from 'react-redux';
import CloseButton from '../button/closeButton';
import Button from '../button';
import {closeCreateTicketModal, createTicket} from '../../redux/actions';
import cn from 'classnames';
import styles from './createTicketWindow.module.css';


const CreateTicketWindow = ({closeCreateTicketModal, createTicketRequest}) => {
    const {register, handleSubmit} = useForm();

    return (
        <div className={styles.modal}>
            <div className={styles.modalOverlay}></div>
            <div className={styles.modalInner}>
                <CloseButton onClick={closeCreateTicketModal}/>
                <form onSubmit={handleSubmit(createTicketRequest)} className={styles.createTicketForm}>
                    <div className={styles.formElement}>
                        <label className={styles.createTicketLabel}>Title:</label>
                        <input {...register('title', {required: true, maxLength: 50})} type="text" size="50" 
                        className={styles.createTicketInput}  />
                    </div>
                    <div className={styles.formElement}>
                        <label className={styles.createTicketLabel}>Description:</label>
                        <textarea {...register('description', {required: true, maxLength: 50})} type="text" id="create-description" size="2000" 
                        className={cn(styles.createTicketInput, styles.descriptionInput)}></textarea>
                    </div>
                    <div className={styles.formElement}>
                        <label className={styles.createTicketLabel}>Status: </label>
                        <select {...register('status')}>
                            <option value="to do">to do</option>
                            <option value="in progress">in progress</option>
                            <option value="on review">in review</option>
                            <option value="done">done</option>
                        </select>
                    </div>
                    <div className={styles.submitButton}>
                        <Button className={styles.submitButton} name={'Create ticket'} onClick={() => {}}/>
                    </div>

                </form>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    closeCreateTicketModal: () => dispatch(closeCreateTicketModal),
    createTicketRequest: (ticketData) => dispatch(createTicket(ticketData)),
})

export default connect(null, mapDispatchToProps) (CreateTicketWindow);