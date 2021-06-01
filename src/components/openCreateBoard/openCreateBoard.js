import React from 'react';
import styles from './openCreateBoard.module.css';
import cn from 'classnames';
import {connect} from "react-redux";
import { createNewBoard } from '../../redux/actions';

import Button from "../button/button";

const OpenCreateBoard = ({createNewBoardDispatch}) => {
    return (
      <div>
          <div className={styles.inner}>
              <form className={styles.form}>
                  <label className={cn(styles.element, styles.text)}>Introduce your board ID:</label>
                  <input className={cn(styles.element, styles.input)} placeholder={'ex: ' +
                  '0123456789'}/>
                  <Button className={styles.element} name={'Open'} onClick={()=>{}}/>
              </form>
              <p className={cn(styles.element, styles.text)}>Or generate a new board:</p>
              <Button className={styles.element} name={'Create'} onClick={createNewBoardDispatch}/>
          </div>
      </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
   createNewBoardDispatch: () => dispatch(createNewBoard),
});

export default connect(null, mapDispatchToProps) (OpenCreateBoard);