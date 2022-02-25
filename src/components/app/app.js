import React from 'react';
import {connect} from "react-redux";
import {Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';

import {loadingSelector, alertsSelector} from '../../redux/selectors';

import styles from './app.module.scss';

import OpenCreateBoard from "../openCreateBoard";
import BoardPage from "../boardPage";
import Header from '@header';
import Loader from '@loader';
import Alert from '@alert';

const App = ({loading, alerts}) => {
    return (
        <React.Fragment>
            <Header/>

            {loading ? <Loader /> : null}

            {alerts.length > 0 ?
                <div className={styles.app__alerts_block}>
                    { alerts.map((alert, index) =>
                        <Alert key={index} alert={alert}/>)}
                </div>
                : null
            }
            <main>
                <Switch>
                    <Route path='/' exact component={OpenCreateBoard}/>
                    <Route path='/board/:boardId' exact component={BoardPage} />
                    <Route path='/board/:boardId/tickets/create' render={(props) => (
                        <BoardPage {...props} createTicket={true} />
                    )}/>
                    <Route path='/board/:boardId/tickets/:ticketId' component={BoardPage} />
                </Switch>
            </main>
        </React.Fragment>

    );
}

App.propTypes = {
    loading: PropTypes.bool,
}
const mapStateToProps = (state) => ({
    loading: loadingSelector(state),
    alerts: alertsSelector(state),
});

export default connect(mapStateToProps)  (App);