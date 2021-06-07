import React from 'react';
import {useForm} from 'react-hook-form';
import {connect} from 'react-redux';
import Button from '../button';
import CloseButton from '../button/closeButton/closeButton';
import {createTicket} from '../../redux/actions';
import cn from 'classnames';
import styles from './createTicketWindow.module.css';
import {statusesSelector} from "../../redux/selectors";
import {Link, useHistory} from "react-router-dom";


const CreateTicketWindow = ({boardId, statuses, createTicketRequest}) => {
    const {register, handleSubmit} = useForm();
    const history = useHistory();

    const createTicket = (formData) => {
        createTicketRequest(formData);
        history.push(`/board/${boardId}`);
    }

    return (
        <div className={styles.modal} data-id="createTicketWindow">
            <div className={styles.overlay}></div>
            <div className={styles.inner}>
                <Link to={`/board/${boardId}`}>
                    <CloseButton/>
                </Link>
                <form className={styles.form} onSubmit={handleSubmit(createTicket)}>
                    <div className={styles.formElement}>
                        <label className={styles.label}>Title:</label>
                        <input {...register('title')} required maxLength={50} type="text" size="50"
                        className={cn(styles.title, styles.input)} />
                    </div>
                    <div className={cn(styles.formElement, styles.description)}>
                        <label className={styles.label}>Description:</label>
                        <textarea {...register('description', {required: true})} 
                            type="text" id="create-description" size="2000" 
                            className={cn(styles.input, styles.descriptionInput)}>
                        </textarea>
                    </div>
                    <div className={styles.formElement}>
                        <label className={styles.label}>Status: </label>
                        <select className={cn(styles.statusInput, styles.input)} 
                                {...register('status', {value: statuses[0]})}>
                            {statuses.map((item) =>
                                <option className={styles.option} key={item}>{item}</option> 
                            )}
                        </select>
                    </div>
                    <div className={styles.buttons}>
                        <Button name={'Create'} onClick={() => {}}/>
                    </div>

                </form>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    statuses: statusesSelector(state),
});

const mapDispatchToProps = (dispatch, props) => ({
    createTicketRequest: (ticketData) => dispatch(createTicket(ticketData, props.boardId)),
})

export default connect(mapStateToProps, mapDispatchToProps) (CreateTicketWindow);