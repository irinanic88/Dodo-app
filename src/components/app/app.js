import React, {useEffect} from 'react';
import {connect} from "react-redux";
import styles from './app.module.css';
import {loadStatuses} from '../../redux/actions';
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
                <Route path='/board/:id' component={BoardPage} />
            </Switch>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
   loadStatusesDispatch: (statuses) => (dispatch(loadStatuses(statuses))),
});

export default connect(null, mapDispatchToProps)  (App);