import React, {useState} from 'react';
import {connect} from 'react-redux';
import {useForm} from 'react-hook-form';
import {Link, useHistory} from "react-router-dom";
import PropTypes from 'prop-types';
import useEscapeToExit from '@hooks/useEscapeToExit'

import {createTicket} from '@redux/actions';
import {columnsSelector} from '@redux/selectors';

import cn from 'classnames';
import styles from './createTicketWindow.module.scss';

import Button from '@button';
import Close from "@closeButton";

export let CreateTicketWindow;
CreateTicketWindow = ({
    boardId,
    statuses,
    createTicketRequest
}) => {

    const [inputValue, setInputValue] = useState('');
    const {register, handleSubmit} = useForm();
    const history = useHistory();

    const exitModal = () => history.push(`/board/${boardId}`);

    useEscapeToExit(exitModal);

    const createTicket = (formData) => {
        createTicketRequest(formData);
        exitModal();
    }

    const onTitleChange = (event) => {
        return setInputValue(event.target.value);
    }

    const handleWindowClick = (event) => {
        const clickedArea = event.target;

        if (clickedArea.dataset.id === "create-ticket-window") {
            exitModal();
        }
        return;
    }

    return (
        <div className={styles.createTicketWindow}
             data-id="create-ticket-window"
             onClick={handleWindowClick}
        >
            <div className={styles.createTicketWindow__container}>

                <Link to={`/board/${boardId}`}>
                    <Close />
                </Link>

                <form className={styles.createTicketWindow__form} onSubmit={handleSubmit(createTicket)}>

                    <div className={styles.createTicketWindow__form_element}>
                        <label className={styles.createTicketWindow__label} htmlFor="create-title">Title:</label>
                        <input {...register('title', { required: true, maxLength: 60} )} autoFocus
                               onChange={onTitleChange}
                               className={cn(styles.createTicketWindow__input, styles.createTicketWindow__title)}
                               id="create-title"
                        />
                    </div>

                    <div className={styles.createTicketWindow__form_element}>
                        <label className={styles.createTicketWindow__label} htmlFor="create-description">Description:</label>
                        <textarea {...register('description')}
                                  id="create-description"
                                  className={cn(styles.createTicketWindow__input, styles.createTicketWindow__description)}>
                    </textarea>
                    </div>

                    <div className={styles.createTicketWindow__form_element}>
                        <label className={styles.createTicketWindow__label} htmlFor="create-status">Status: </label>
                        <select className={cn(styles.createTicketWindow__status, styles.createTicketWindow__input)}
                                id="create-status"
                                {...register('status', {value: statuses[0]})}>
                            {statuses.map((item) =>
                                <option key={item}>{item}</option>
                            )}
                        </select>
                    </div>

                    <div className={styles.createTicketWindow__buttons}>
                        <Button name={'Create'}
                                onClick={() => {}}
                                isDisabled={inputValue === ''}
                                data-id="create-button"
                        />
                        <Link to={`/board/${boardId}`}>
                            <Button name={'Close'} onClick={() => {}}/>
                        </Link>
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