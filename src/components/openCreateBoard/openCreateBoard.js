import React from 'react';
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

    const openBoard = (event) => {
        event.preventDefault();

        const boardId = getValues('boardId');

        if (boardId) {
            history.push(`/board/${boardId}`);
        }
    }

    const submitCreateNewBoard = (event) => {
        event.preventDefault();
        createNewBoardDispatch();
    }

    return (
      <div className={styles.container} data-id="open-create-board">
          <div className={cn(styles.inner, styles.container__inner)}>
              <form className={styles.form}>
                  <label className={cn(styles.form__label, styles.form__items)}>Introduce your board ID:</label>
                  <input className={cn(styles.form__input, styles.form__items)}
                         {...register('boardId')}
                  />
                  <Button className={styles.form__items} name={'Open'} onClick={openBoard}/>
              </form>
              {
                  newBoardId ?
                      <form className={styles.form} data-id="new-board-link">
                          <label className={cn(styles.form__label, styles.form__items)}>Click here to open your board:</label>
                          <Link to={`/board/${newBoardId}`}
                                className={cn(styles.form__link, styles.form__items)}
                          >
                              {window.location.origin}/board/{newBoardId}
                          </Link>
                      </form>
                  :
                      <form className={styles.form} data-id="create-new-board">
                          <label className={cn(styles.form__label, styles.form__items)}>Or generate a new board:</label>
                          <Button className={styles.form__items}
                                  name={'Create'}
                                  onClick={submitCreateNewBoard}
                          />
                    </form>
              }
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