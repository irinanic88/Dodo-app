import React, {useEffect} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import styles from './alert.module.scss';
import cn from 'classnames';

import {closeAlert} from '../../redux/actions';
import {SUCCESS_ALERT, ERROR_ALERT, TIP_ALERT} from '../../redux/variables/alertTypes';

import {ReactComponent as CloseIcon} from '../../assets/icons/close.svg';

const Alert = ({alert, closeAlertDispatch}) => {
    const {type, message, details, id} = alert;
    const closeAlertTime = 5000;

    // useEffect(() => {
    //     setTimeout(() => closeAlertDispatch(id), closeAlertTime);
    // }, []);

    return (
        <div className={cn(styles.alert, {
            [styles.alert_success]: type === SUCCESS_ALERT,
            [styles.alert_error]: type === ERROR_ALERT,
            [styles.alert_tip]: type === TIP_ALERT
        })}>
            <p className={styles.alert__text}>{message}</p>
            <details className={styles.alert__details}>
                <summary className={styles.alert__summary}>details</summary>
                <p className={styles.alert__details_text}>{details}</p>
            </details>
            <button className={cn(styles.alert__close, {
                [styles.alert__close_success]: type === SUCCESS_ALERT,
                [styles.alert__close_error]: type === ERROR_ALERT,
                [styles.alert__close_tip]: type === TIP_ALERT
            })} onClick={() => closeAlertDispatch(id)}>
                <CloseIcon />
            </button>
        </div>
    );
}

Alert.propTypes = {
    alert: PropTypes.shape({
        type: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }).isRequired,
    closeAlertDispatch: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
    closeAlertDispatch: (id) =>  (dispatch(closeAlert(id))),
});

export default connect(null, mapDispatchToProps) (Alert);