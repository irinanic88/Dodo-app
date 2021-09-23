import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import {loadingSelector} from '../../redux/selectors';

import styles from './app.module.css';
import cn from "classnames";

import {Route, Switch, Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../icons/logo.svg';
import OpenCreateBoard from "../openCreateBoard";
import BoardPage from "../boardPage";
import Loader from '../loader';

const App = ({loading}) => {
    return (
        <div className={styles.header}>
            <Link to='/'>
                <Logo className={cn(styles.logo, styles.header__logo)}/>
            </Link>
            {loading ? <Loader /> : null}
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
});

export default connect(mapStateToProps)  (App);