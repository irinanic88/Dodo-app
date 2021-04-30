import React from 'react';
import { connect } from 'react-redux';
import Board from '../board';
import Header from '../header';
import Loader from '../loader';
import CreateTicketWindow from '../createTicketWindow';
import { displayCreateTicketWindowSelector, loadingTicketsSelector } from '../../redux/selectors';

const App = ({boardInfo, displayCreateTicketWindow, loadingTickets}) => {
    return (
      <div>
        <Header />
        <Board boardInfo={boardInfo}/>
        {displayCreateTicketWindow ? <CreateTicketWindow /> : null}
        {loadingTickets ? <Loader /> : null}
      </div>
    );
};

const mapStateToProps = (state) => ({
  displayCreateTicketWindow: displayCreateTicketWindowSelector(state),
  loadingTickets: loadingTicketsSelector(state),
});

export default connect(mapStateToProps) (App);

