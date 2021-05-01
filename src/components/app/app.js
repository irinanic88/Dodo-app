import React from 'react';
import { connect } from 'react-redux';
import Board from '../board';
import Header from '../header';
import Loader from '../loader';
import CreateTicketWindow from '../createTicketWindow';
import DescriptionWindow from '../descriptionWindow';
import { 
  displayCreateTicketWindowSelector, 
  displayDescriptionWindowSelector,
  ticketIdSelector, 
  loadingTicketsSelector 
} from '../../redux/selectors';

const App = ({boardInfo, displayCreateTicketWindow, displayDescriptionWindow, loadingTickets, ticketId}) => {
    return (
      <div>
        <Header />
        <Board boardInfo={boardInfo}/>
        {displayCreateTicketWindow ? <CreateTicketWindow /> : null}
        {displayDescriptionWindow ? <DescriptionWindow ticketId={ticketId}/> : null}
        {loadingTickets ? <Loader /> : null}
      </div>
    );
};

const mapStateToProps = (state) => ({
  displayCreateTicketWindow: displayCreateTicketWindowSelector(state),
  displayDescriptionWindow: displayDescriptionWindowSelector(state),
  ticketId: ticketIdSelector(state),
  loadingTickets: loadingTicketsSelector(state),
});

export default connect(mapStateToProps) (App);

