import React, {useEffect} from 'react';
import {connect} from "react-redux";

import {loadStatuses} from '../../redux/actions';

import styles from './app.module.css';

import {Route, Switch, Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../icons/logo.svg';
import OpenCreateBoard from "../openCreateBoard";
import BoardPage from "../boardPage";
import DescriptionWindow from "../descriptionWindow";

const App = ({statuses, loadStatusesDispatch}) => {
    useEffect(() => loadStatusesDispatch(statuses), [loadStatusesDispatch, statuses]);

    return (
        <div>
            <Link to='/'>
                <Logo className={styles.logo}/>
            </Link>
            <Switch>
                <Route path='/' exact component={OpenCreateBoard}/>
                <Route path='/board/:boardId' exact component={BoardPage} />
                <Route path='/board/:boardId/tickets/create' render={(props) => (
                    <BoardPage {...props} createTicket={true} />
                )}/>
                <Route path='/board/:boardId/tickets/:ticketId' component={BoardPage} />

            </Switch>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
   loadStatusesDispatch: (statuses) => (dispatch(loadStatuses(statuses))),
});

export default connect(null, mapDispatchToProps)  (App);