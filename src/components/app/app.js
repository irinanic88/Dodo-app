import React, {useEffect} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import {loadStatuses} from '../../redux/actions';

import styles from './app.module.css';

import {Route, Switch, Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../icons/logo.svg';
import OpenCreateBoard from "../openCreateBoard";
import BoardPage from "../boardPage";

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

App.propTypes = {
    statuses: PropTypes.arrayOf(PropTypes.string).isRequired,
    loadStatusesDispatch: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
   loadStatusesDispatch: (statuses) => (dispatch(loadStatuses(statuses))),
});

export default connect(null, mapDispatchToProps)  (App);