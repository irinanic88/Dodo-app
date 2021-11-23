import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import {loadingSelector} from '../../redux/selectors';

import styles from './app.module.css';

import {Route, Switch, Link} from 'react-router-dom';
import Logo from '../logo';
import OpenCreateBoard from "../openCreateBoard";
import BoardPage from "../boardPage";
import Loader from '../loader';

const App = ({loading}) => {

    return (
        <div className={styles.app}>

            {loading ? <Loader /> : null}

            <div className={styles.app__container}>
                <div className={styles.app__logo}>
                    <Link to='/'>
                        <Logo/>
                    </Link>
                </div>

                <Switch>
                    <Route path='/' exact component={OpenCreateBoard}/>
                    <Route path='/board/:boardId' exact component={BoardPage} />
                    <Route path='/board/:boardId/tickets/create' render={(props) => (
                        <BoardPage {...props} createTicket={true} />
                    )}/>
                    <Route path='/board/:boardId/tickets/:ticketId' component={BoardPage} />
                </Switch>
            </div>
        </div>

    );
}

App.propTypes = {
    loading: PropTypes.bool,
}
const mapStateToProps = (state) => ({
    loading: loadingSelector(state),
});

export default connect(mapStateToProps)  (App);