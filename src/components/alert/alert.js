import React, {useEffect} from 'react';
import {connect} from "react-redux";

import styles from './alert.module.scss';
import cn from 'classnames';

import {closeAlert} from '../../redux/actions';

import {ReactComponent as CloseIcon} from '../../assets/icons/close.svg';

const Alert = ({alert, closeAlertDispatch}) => {
    const {type, message, id} = alert;
    const closeAlertTime = 3000;

    useEffect(() => {
        setTimeout(() => closeAlertDispatch(id), closeAlertTime);
    }, []);

    return (
        <div className={cn(styles.alert, {
            [styles.alert_success]: type === 'SUCCESS',
            [styles.alert_error]: type === 'ERROR',
            [styles.alert_tip]: type === 'TIP'
        })}>
            <p className={styles.alert__text}>{message}</p>
            <button className={cn(styles.alert__close, {
                [styles.alert__close_success]: type === 'SUCCESS',
                [styles.alert__close_error]: type === 'ERROR',
                [styles.alert__close_tip]: type === 'TIP'
            })} onClick={() => closeAlertDispatch(id)}>
                <CloseIcon />
            </button>
        </div>
    );
}

//addPropTypes

const mapDispatchToProps = (dispatch) => ({
    closeAlertDispatch: (id) =>  (dispatch(closeAlert(id))),
});

export default connect(null, mapDispatchToProps) (Alert);