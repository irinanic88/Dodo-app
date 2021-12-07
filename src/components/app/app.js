import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';

import {loadingSelector, alertsSelector} from '../../redux/selectors';

import OpenCreateBoard from "../openCreateBoard";
import BoardPage from "../boardPage";
import Header from '../header';
import Loader from '../loader';
import Alert from "../alert";

const App = ({loading, alerts}) => {
    console.log(alerts);


    return (
            <div>
                <Header/>

                {loading ? <Loader /> : null}

                {alerts.length > 0 ?
                    alerts.map((alert, index) =>
                    <Alert key={index} context={alert.type} text={alert.message} />
                    )
                    : null
                }



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
    loading: PropTypes.bool,
}
const mapStateToProps = (state) => ({
    loading: loadingSelector(state),
    alerts: alertsSelector(state),
});

export default connect(mapStateToProps)  (App);