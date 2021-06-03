import React from 'react';
import styles from './openCreateBoard.module.css';
import cn from 'classnames';
import {useForm} from "react-hook-form";
import {connect} from "react-redux";
import {createNewBoard} from '../../redux/actions';
import {newBoardIdSelector} from "../../redux/selectors";
import {useHistory} from 'react-router-dom';

import Button from "../button/button";

const OpenCreateBoard = ({newBoardId, createNewBoardDispatch}) => {
    const { register, getValues } = useForm();
    const history = useHistory();

    const openBoard = (event) => {
        event.preventDefault();
        const boardId = getValues('boardId');
        history.push(`/board/${boardId}`);
    }

    return (
      <div>
          <div className={styles.inner}>
              <form className={styles.form}>
                  <label className={cn(styles.element, styles.text)}>Introduce your board ID:</label>
                  <input className={cn(styles.element, styles.input)} placeholder={'ex: ' +
                  'qwerty123'} {...register('boardId')}/>
                  <Button className={styles.element} name={'Open'} onClick={openBoard}/>
              </form>
              <p className={cn(styles.element, styles.text)}>Or generate a new board:</p>
              <Button className={styles.element} name={'Create'} onClick={createNewBoardDispatch}/>
              {newBoardId ? <p>Your board`s ID is: {newBoardId}</p> : null}
          </div>
      </div>
    );
};
const mapStateToProps = (state) => ({
    newBoardId: newBoardIdSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    createNewBoardDispatch: () => dispatch(createNewBoard),
});

export default connect(mapStateToProps, mapDispatchToProps) (OpenCreateBoard);