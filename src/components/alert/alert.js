import React, {useEffect} from 'react';
import {connect} from "react-redux";

import styles from './alert.module.scss';
import cn from 'classnames';

import {closeAlert} from '../../redux/actions';

import {ReactComponent as CloseIcon} from '../../assets/icons/close.svg';

const Alert = ({alert, closeAlertDispatch}) => {
    const {type, message, data, id} = alert;
    const closeAlertTime = 5000;

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
            <details className={styles.alert__details}>
                <summary className={styles.alert__summary}>details</summary>
                <p className={styles.alert__details_text}>{data}</p>
            </details>
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