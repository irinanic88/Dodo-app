import React from 'react';
import CloseButton from '../button/closeButton';
import Button from '../button';
import cn from 'classnames';

import styles from './createTicketWindow.module.css';

const CreateTicketWindow = () => {

    return (
        <div className={styles.modal}>
            <div className={styles.modalOverlay}></div>
            <div className={styles.modalInner}>
                <CloseButton />
                <form className={styles.createTicketForm}>
                    <div className={styles.formElement}>
                        <label className={styles.createTicketLabel}>Title:</label>
                        <input type="text" id="create-title" maxLength="50" size="50" 
                        className={styles.createTicketInput} required />
                    </div>
                    <div className={styles.formElement}>
                        <label className={styles.createTicketLabel}>Description:</label>
                        <textarea type="text" id="create-description" size="2000" 
                        className={cn(styles.createTicketInput, styles.descriptionInput)} required></textarea>
                    </div>
                    <div className={styles.submitButton}>
                        <Button className={styles.submitButton} name={'Create ticket'} onClick={() => {}}/>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default CreateTicketWindow;