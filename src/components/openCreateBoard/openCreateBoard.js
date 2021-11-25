import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {useHistory} from 'react-router-dom';
import {useForm} from "react-hook-form";
import PropTypes from 'prop-types';

import {createNewBoard} from '../../redux/actions';
import {newBoardIdSelector} from "../../redux/selectors";

import styles from './openCreateBoard.module.scss';

import Button from "../button/button";

export let OpenCreateBoard = ({newBoardId, createNewBoardDispatch}) => {
    const { register, getValues } = useForm();
    const history = useHistory();

    useEffect(() => {
        if (newBoardId) {
            history.push(`/board/${newBoardId}`);
        }
    }, [newBoardId, history]);

    const openBoard = (event) => {
        event.preventDefault();
        const boardId = getValues('boardId');
        if (boardId) {
            history.push(`/board/${boardId}`);
        }
    }

    return (
      <div data-id="open-create-board" className={styles.openCreateBoard}>
          <div className={styles.openCreateBoard__inner}>
              <p data-id="create-new-board">Click here to create a new board:</p>
              <Button name={'Create board'} onClick={createNewBoardDispatch}/>

              <p>or</p>

              <label >Introduce your board ID:</label>
              <input {...register('boardId', {maxLength: 10})}
                     placeholder="Ex: 0123456789"
                     className={styles.openCreateBoard__input}
              />
              <Button name={'Open'} onClick={openBoard}/>
          </div>
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