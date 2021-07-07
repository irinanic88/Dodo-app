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

    return (
      <div data-id="open-create-board">
          <div className={styles.inner}>
              <form className={styles.form}>
                  <label className={cn(styles.element, styles.text)}>Introduce your board ID:</label>
                  <input className={cn(styles.element, styles.input)}
                         {...register('boardId')}
                  />
                  <Button className={styles.element} name={'Open'} onClick={openBoard}/>
              </form>
              {
                  newBoardId ?
                      <div data-id="new-board-link">
                          <p className={cn(styles.element, styles.text)}>Go to your board:</p>
                          <Link to={`/board/${newBoardId}`}
                                className={cn(styles.element, styles.newBoardLink)}
                          >
                              {window.location.origin}/board/{newBoardId}
                          </Link>
                      </div>
                  : <div className={styles.create} data-id="create-new-board">
                          <p className={cn(styles.element, styles.text)}>Or generate a new board:</p>
                          <Button className={styles.element}
                                  name={'Create'}
                                  onClick={createNewBoardDispatch}
                          />
                    </div>
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