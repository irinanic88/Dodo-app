import React, { useState } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import cn from 'classnames';
import styles from './createTicketWindow.module.css';

import {useForm} from 'react-hook-form';
import {Link, useHistory} from "react-router-dom";
import Button from '../button';
import CloseButton from '../button/closeButton/closeButton';

import {createTicket} from '../../redux/actions';
import {columnsSelector} from "../../redux/selectors";

export let CreateTicketWindow;
CreateTicketWindow = ({
                                boardId,
                                statuses,
                                createTicketRequest
}) => {
    const {register, handleSubmit} = useForm();
    const history = useHistory();

    const createTicket = (formData) => {
        createTicketRequest(formData);
        history.push(`/board/${boardId}`);
    }

    const [inputValue, setInputValue] = useState('');

    return (
        <div className={styles.modal} data-id="create-ticket-window">
            <div className={styles.overlay}/>
            <div className={styles.inner}>
                <Link to={`/board/${boardId}`}>
                    <CloseButton/>
                </Link>
                <form className={styles.form} onSubmit={handleSubmit(createTicket)}>
                    <div className={styles.formElement}>
                        <label className={styles.label}>Title:</label>
                        <input {...register('title')} required maxLength={50} type="text" size="50"
                               onChange={(event => setInputValue(event.target.value))}
                        className={cn(styles.title, styles.input)} />
                    </div>
                    <div className={cn(styles.formElement, styles.description)}>
                        <label className={styles.label}>Description:</label>
                        <textarea {...register('description')}
                            type="text" id="create-description" size="2000" 
                            className={cn(styles.input, styles.descriptionInput)}>
                        </textarea>
                    </div>
                    <div className={styles.formElement}>
                        <label className={styles.label}>Status: </label>
                         <select className={cn(styles.statusInput, styles.input)}
                                {...register('status', {value: statuses[0]})}>
                            {statuses.map((item) =>
                                <option key={item}>{item}</option>
                            )}
                        </select>
                    </div>
                    <div className={styles.buttons}>
                        <Button name={'Create'}
                                onClick={() => {}}
                                isDisabled={inputValue === ''}/>
                    </div>

                </form>
            </div>
        </div>
    );
};

CreateTicketWindow.propTypes = {
    boardId: PropTypes.string.isRequired,
    statuses: PropTypes.arrayOf(PropTypes.string).isRequired,
    createTicketRequest: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    statuses: columnsSelector(state),
});

const mapDispatchToProps = (dispatch, props) => ({
    createTicketRequest: (ticketData) => dispatch(createTicket(ticketData, props)),
})

export default connect(mapStateToProps, mapDispatchToProps) (CreateTicketWindow);