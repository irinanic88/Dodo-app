import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import Board from '../board';
import Loader from '../loader';
import CreateTicketWindow from '../createTicketWindow';
import DescriptionWindow from '../descriptionWindow';
import {
    displayCreateTicketWindowSelector,
    displayDescriptionWindowSelector,
    ticketIdSelector,
    loadingSelector,
    boardInfoSelector
} from '../../redux/selectors';
import styles from './boardPage.module.css';
import Button from "../button/button";
import {checkBoardId, openCreateTicketModal} from "../../redux/actions";
import {useHistory} from 'react-router-dom';

export let BoardPage;
BoardPage = ({
                 match,
                 boardInfo,
                 displayCreateTicketWindow,
                 displayDescriptionWindow,
                 checkBoardIdDispatch,
                 loading,
                 openCreateTicketModal,
                 ticketId
}) => {

    const requestedBoardId = match.params.id;
    const history = useHistory();

    useEffect(() => checkBoardIdDispatch(requestedBoardId), [checkBoardIdDispatch, requestedBoardId]);

    if (boardInfo === undefined) {
        return null;
    }
    if (boardInfo === null ) {
        history.push('/');
    }

        return (
            <div data-id="app">
                <div className={styles.header} data-id="header">
                    <h2>Board: {requestedBoardId}</h2>
                    <Button name={'New ticket'} onClick={openCreateTicketModal}/>
                </div>
                <Board boardId={requestedBoardId}/>
                {displayCreateTicketWindow ? <CreateTicketWindow boardId={requestedBoardId}/> : null}
                {displayDescriptionWindow ? <DescriptionWindow boardId={requestedBoardId} ticketId={ticketId}/> : null}
                {loading ? <Loader /> : null}
            </div>
        );

};

const mapStateToProps = (state, props) => ({
    boardInfo: boardInfoSelector(state, props.match.params.id),
  displayCreateTicketWindow: displayCreateTicketWindowSelector(state),
  displayDescriptionWindow: displayDescriptionWindowSelector(state),
  ticketId: ticketIdSelector(state),
  loading: loadingSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    checkBoardIdDispatch: (boardId) => dispatch(checkBoardId(boardId)),
    openCreateTicketModal: () => dispatch(openCreateTicketModal),
});

export default connect(mapStateToProps, mapDispatchToProps) (BoardPage);

