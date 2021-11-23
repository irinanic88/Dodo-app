import React, {useEffect} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import styles from './openCreateBoard.module.css';
import cn from 'classnames';

import {createNewBoard} from '../../redux/actions';
import {newBoardIdSelector} from "../../redux/selectors";

import {useHistory, Link} from 'react-router-dom';
import Button from "../button/button";
import {useForm} from "react-hook-form";

export let OpenCreateBoard;
OpenCreateBoard = ({newBoardId, createNewBoardDispatch}) => {
    const { register, getValues } = useForm();
    const history = useHistory();

    useEffect(() => {
        if (newBoardId) {
            history.push(`/board/${newBoardId}`);
        }
    }, [newBoardId]);

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
                  <input className={styles.openCreateBoard__input} {...register('boardId')} maxlength="10" size="10"/>

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