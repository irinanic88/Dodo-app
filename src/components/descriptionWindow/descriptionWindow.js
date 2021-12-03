import React from 'react';
import { connect } from 'react-redux';
import {useForm} from 'react-hook-form';
import { useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {columnsSelector, ticketSelector} from '../../redux/selectors';
import {changeStatus, deleteTicket} from '../../redux/actions';

import styles from './descriptionWindow.module.scss';

import Button from '../button';

export let DescriptionWindow = ({
    columns,
    ticketId,
    boardId,
    ticket,
    changeStatusDispatcher,
    deleteTicketDispatcher
}) => {

    const { register } = useForm();
    const history = useHistory();


    if (!ticket) {
        history.goBack();
        return null;
    }

    const {status, id, title, description} = ticket;

    const handleChangeStatus = (event) => {
        event.preventDefault();
        const destinationColumnTitle = event.target.value;
        return changeStatusDispatcher(ticketId, ticket.status, destinationColumnTitle, 0, boardId);
    };

    const handleWindowClick = (event) => {
        const clickedArea = event.target;

        if (clickedArea.dataset.id) {
            history.push(`/board/${boardId}`);
        }
        return;
    }

    return (
    <div className={styles.descriptionWindow}
         data-id="description-window"
         onClick={handleWindowClick}
    >
        <div className={styles.descriptionWindow__container}>

            <p className={styles.descriptionWindow__number}>№ {id}</p>
            <h2 className={styles.descriptionWindow__title}>{title}</h2>
            <p className={styles.descriptionWindow__status}>{status}</p>
            <p className={styles.descriptionWindow__description}>{description}</p>

            <form className={styles.descriptionWindow__form}>
                <label className={styles.descriptionWindow__label}>
                    Change status:
                </label>

                <select {...register('status')}
                        value={status}
                        className={styles.descriptionWindow__input}
                        onChange={handleChangeStatus}
                >
                    {columns.map((item) =>
                    <option key={item}>{item}</option>
                    )}
                </select>

            </form>
            <Button className={styles.descriptionWindow__delete}
                    name={'Delete ticket'}
                    onClick={deleteTicketDispatcher}
                    buttonStyle={'secondary'}
            />
            <Link to={`/board/${boardId}`} className={styles.descriptionWindow__close}>
                <Button name={'Close'} onClick={() => {}}/>
            </Link>
        </div>
    </div>
    );
};

DescriptionWindow.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.string).isRequired,
    ticketId: PropTypes.string.isRequired,
    boardId: PropTypes.string.isRequired,
    ticket: PropTypes.shape({
        status: PropTypes.string,
        id: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
    }),
    changeStatusDispatcher: PropTypes.func.isRequired,
    deleteTicketDispatcher: PropTypes.func.isRequired,
}

const mapStateToProps = (state, props) => ({
    columns: columnsSelector(state),
    ticket: ticketSelector(state, props),
});

const mapDispatchToProps = (dispatch, props) => ({
    changeStatusDispatcher: (ticketId,
                             sourceColumnTitle,
                             destinationColumnTitle,
                             destinationIndex,
                             boardId) =>
        dispatch(changeStatus(
            ticketId,
            sourceColumnTitle,
            destinationColumnTitle,
            destinationIndex,
            boardId
        )),
    deleteTicketDispatcher: () => dispatch(deleteTicket(props)),
});

export default connect(mapStateToProps, mapDispatchToProps) (DescriptionWindow);