import React from 'react';
import styles from './openCreateBoard.module.css';
import cn from 'classnames';
import {useForm} from "react-hook-form";
import {connect} from "react-redux";
import {createNewBoard, checkBoardId} from '../../redux/actions';

import Button from "../button/button";

const OpenCreateBoard = ({createNewBoardDispatch, checkBoardIdDispatch}) => {
    const { register, getValues } = useForm();
    const openBoard = (event) => {
        event.preventDefault();
        const boardId = getValues('boardId');
        checkBoardIdDispatch(boardId);

    }
    return (
      <div>
          <div className={styles.inner}>
              <form className={styles.form}>
                  <label className={cn(styles.element, styles.text)}>Introduce your board ID:</label>
                  <input className={cn(styles.element, styles.input)} placeholder={'ex: ' +
                  '0123456789'} {...register('boardId')}/>
                  <Button className={styles.element} name={'Open'} onClick={openBoard}/>
              </form>
              <p className={cn(styles.element, styles.text)}>Or generate a new board:</p>
              <Button className={styles.element} name={'Create'} onClick={createNewBoardDispatch}/>
          </div>
      </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    checkBoardIdDispatch: (boardId) => dispatch(checkBoardId(boardId)),
   createNewBoardDispatch: () => dispatch(createNewBoard),
});

export default connect(null, mapDispatchToProps) (OpenCreateBoard);