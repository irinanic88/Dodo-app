import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {useHistory} from 'react-router-dom';
import {useForm} from "react-hook-form";
import PropTypes from 'prop-types';

import {createNewBoard} from '../../redux/actions';
import {newBoardIdSelector} from "../../redux/selectors";

import styles from './openCreateBoard.module.scss';

import Button from '../button/button';
import Message from '../message/message';

export let OpenCreateBoard = ({newBoardId, createNewBoardDispatch}) => {
    const { register, getValues } = useForm();
    const history = useHistory();

    const [inputValue, setinputValue] = useState('');

    useEffect(() => {
        if (newBoardId) {
            history.push(`/board/${newBoardId}`);
        }
    }, [newBoardId, history]);

    const createBoard = () => {
        createNewBoardDispatch();
    }

    const openBoard = (event) => {
        event.preventDefault();
        const boardId = getValues('boardId');
        if (boardId) {
            history.push(`/board/${boardId}`);
        }
    }

    const onBoardIdInputChange = (event) => {
        return setinputValue(event.target.value);
    }

    return (
      <div data-id="open-create-board" className={styles.openCreateBoard}>
          <div className={styles.openCreateBoard__inner}>
              <p data-id="create-new-board">Click here to create a new board:</p>
              <Button name={'Create board'} onClick={createBoard}/>

              <p>or</p>

              <label >Introduce your board ID:</label>
              <input {...register('boardId')}
                     maxLength="10"
                     placeholder="Ex: 0123456789"
                     className={styles.openCreateBoard__input} onChange={onBoardIdInputChange}
              />
              <Button name={'Open'}
                      onClick={openBoard}
                      isDisabled={inputValue === '' || inputValue.length !== 10}
                      data-id="open-button"/>
          </div>

          <Message context={'tip'} text={'You are such a good person!'} />
      </div>
    );
};

OpenCreateBoard.propTypes = {
    newBoardId: PropTypes.string,
    createNewBoardDispatch: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    newBoardId: newBoardIdSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    createNewBoardDispatch: () => dispatch(createNewBoard),
});

export default connect(mapStateToProps, mapDispatchToProps) (OpenCreateBoard);