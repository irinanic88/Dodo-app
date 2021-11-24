import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {boardInfoSelector} from '../../redux/selectors';
import {checkBoardId} from "../../redux/actions";

import styles from './boardPage.module.scss';

import Board from '../board';
import Button from "../button/button";
import CreateTicketWindow from '../createTicketWindow';
import DescriptionWindow from "../descriptionWindow";

export let BoardPage;
BoardPage = ({
                 match,
                 createTicket,
                 boardInfo,
                 checkBoardIdDispatch,
}) => {

    const requestedTicketId = match.params.ticketId;
    const requestedBoardId = match.params.boardId;
    const history = useHistory();

    useEffect(() => { checkBoardIdDispatch(requestedBoardId) },
        [checkBoardIdDispatch, requestedBoardId]);

    useEffect(() => {
        if ( requestedTicketId || createTicket ) {
           return document.body.style.overflow = 'hidden';
        } else {
            return document.body.style.overflow = 'auto';
        }
    }, [requestedTicketId, createTicket]);

    if (boardInfo === undefined) {
        return null;
    }
    if (boardInfo === null ) {
        history.push('/');
    }

        return (
            <div data-id="board-page" className={styles.boardPage}>
                <div className={styles.boardPage__header} data-id="header">
                    <h2 data-id="board-number">Board: {requestedBoardId}</h2>
                    <Link to={`/board/${requestedBoardId}/tickets/create`}>
                        <Button name={'New ticket'} onClick={() => {}}/>
                    </Link>
                </div>

                <Board boardId={requestedBoardId}/>

                {createTicket ? <CreateTicketWindow boardId={requestedBoardId} /> : null}

                {requestedTicketId ? <DescriptionWindow boardId={requestedBoardId} ticketId={requestedTicketId} /> : null}
            </div>
        );
};

BoardPage.propTypes = {
    match: PropTypes.shape({
            params: PropTypes.shape({
                ticketId: PropTypes.string,
                boardId: PropTypes.string,
            }),
        }),
    createTicket: PropTypes.bool,
    boardInfo: PropTypes.string,
    checkBoardIdDispatch: PropTypes.func.isRequired,
}

const mapStateToProps = (state, props) => ({
  boardInfo: boardInfoSelector(state, props.match.params.boardId),
});

const mapDispatchToProps = (dispatch) => ({
    checkBoardIdDispatch: (boardId) => dispatch(checkBoardId(boardId)),
});

export default connect(mapStateToProps, mapDispatchToProps) (BoardPage);