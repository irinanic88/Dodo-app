import React from 'react';

import styles from './message.module.scss';
import cn from 'classnames';

import {ReactComponent as CloseIcon} from '../../assets/icons/close.svg';

const Message = ({context, text}) => {
    return (
        <div className={cn(styles.message, {
            [styles.message_success]: context === 'success',
            [styles.message_error]: context === 'error',
            [styles.message_tip]: context === 'tip'
        })}>
            <p className={styles.message__text}>{text}</p>
            <button className={cn(styles.message__close, {
                [styles.message__close_success]: context === 'success',
                [styles.message__close_error]: context === 'error',
                [styles.message__close_tip]: context === 'tip'
            })} onClick={() => {}}>
                <CloseIcon />
            </button>
        </div>
    );
}

export default Message;