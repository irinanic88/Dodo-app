import React, {useEffect} from 'react';
import {connect} from "react-redux";
import styles from './app.module.css';
import {loadStatuses} from '../../redux/actions';
import {boardIdSelector} from "../../redux/selectors";

import {ReactComponent as Logo} from '../../icons/logo.svg';
import OpenCreateBoard from "../openCreateBoard";
import BoardPage from "../boardPage";


const App = ({statuses, loadStatusesDispatch, boardId}) => {
    useEffect(() => loadStatusesDispatch(statuses), [statuses]);

    return (
        <div>
            <Logo className={styles.logo}/>
            {boardId ?  <BoardPage boardId={boardId}/> : <OpenCreateBoard />}
        </div>
    );
}

const mapStateToProps = (state) => ({
   boardId: boardIdSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
   loadStatusesDispatch: (statuses) => (dispatch(loadStatuses(statuses))),
});

export default connect(mapStateToProps, mapDispatchToProps)  (App);