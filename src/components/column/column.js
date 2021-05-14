import React from 'react';
import {Droppable} from 'react-beautiful-dnd';
import cn from 'classnames';
import Ticket from '../ticket';
import { ticketsForColumnSelector } from '../../redux/selectors';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import styles from './column.module.css';

const Column = ({title, tickets}) => {
    return(
       
            <Droppable droppableId={title}>
                {(provided, snapshot) => {
                    const isDraggingOver = snapshot.isDraggingOver;
                    return (
                        <div className={cn(styles.column, {[styles.overColumn]: isDraggingOver})}
                                ref={provided.innerRef}  
                                {...provided.droppableProps}
                        >
                            <div className={cn(styles.header, {[styles.overColumn]: isDraggingOver})}>
                                <h2>{title}</h2>
                            </div>
                            <div className={styles.headerBottomLine}></div>
                            <div className={styles.body}>
                                {tickets.map((ticket, index) => <Ticket key={ticket.id} ticket={ticket} index={index}/>)}
                                {provided.placeholder}
                            </div>
                    </div> 
                    );
                    }
                }
            </Droppable>
    );
};

Column.propTypes = {
    title: PropTypes.string,
    tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const mapStateToProps = (state, props) => ({
    tickets: ticketsForColumnSelector(state, props),
});

export default connect(mapStateToProps) (Column);

