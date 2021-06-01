import React, {useEffect} from 'react';
import {connect} from "react-redux";
import styles from './app.module.css';
import {loadStatuses} from '../../redux/actions';

import {ReactComponent as Logo} from '../../icons/logo.svg';
import OpenCreateBoard from "../openCreateBoard";
import  BoardPage from '../boardPage/boardPage';
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";



const App = ({statuses, loadStatusesDispatch}) => {
    useEffect(() => loadStatusesDispatch(statuses), [statuses]);
    return (
        <div>
            <Logo className={styles.logo}/>
            <BoardPage/>

        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
   loadStatusesDispatch: (statuses) => (dispatch(loadStatuses(statuses))),
});

export default connect(null, mapDispatchToProps)  (App);

//               <OpenCreateBoard />