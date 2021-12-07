import React from 'react';

import styles from './alert.module.scss';
import cn from 'classnames';

import {ReactComponent as CloseIcon} from '../../assets/icons/close.svg';

const Alert = ({context, text}) => {
    return (
        <div className={cn(styles.alert, {
            [styles.alert_success]: context === 'success',
            [styles.alert_error]: context === 'error',
            [styles.alert_tip]: context === 'tip'
        })}>
            <p className={styles.alert__text}>{text}</p>
            <button className={cn(styles.alert__close, {
                [styles.alert__close_success]: context === 'success',
                [styles.alert__close_error]: context === 'error',
                [styles.alert__close_tip]: context === 'tip'
            })} onClick={() => {}}>
                <CloseIcon />
            </button>
        </div>
    );
}

export default Alert;