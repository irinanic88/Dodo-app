import React from 'react';
import { connect } from 'react-redux';
import Board from '../board';
import Header from '../header';
import CreateTicketWindow from '../createTicketWindow';
import { displayCreateTicketWindowSelector } from '../../redux/selectors';

const App = ({boardInfo, displayCreateTicketWindow}) => {

    return (
      <div>
        <Header />
        <Board boardInfo={boardInfo}/>
        {displayCreateTicketWindow ? <CreateTicketWindow /> : null}
      </div>
    );
};

const mapStateToProps = (state) => ({
  displayCreateTicketWindow: displayCreateTicketWindowSelector(state),
});

export default connect(mapStateToProps) (App);

