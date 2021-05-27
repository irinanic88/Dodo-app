import React from 'react';
import styles from './openCreateBoard.module.css';
import cn from 'classnames';
import Button from "../button/button";

const OpenCreateBoard = () => {
    return (
      <div>
          <div className={styles.inner}>
              <form className={styles.form}>
                  <label className={cn(styles.element, styles.text)}>Introduce your board ID:</label>
                  <input className={cn(styles.element, styles.input)} placeholder={'ex:' +
                  ' MyBoard/123456'}/>
                  <Button className={styles.element} name={'Open'} onClick={()=>{}}/>
              </form>
              <p className={cn(styles.element, styles.text)}>Or generate a new board:</p>
              <Button className={styles.element} name={'Create'} onClick={()=>{}}/>
          </div>
      </div>
    );
}

export default OpenCreateBoard;