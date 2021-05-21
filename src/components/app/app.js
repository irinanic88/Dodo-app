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
  loadingSelector 
} from '../../redux/selectors';

export let App;
App = ({titles, displayCreateTicketWindow, displayDescriptionWindow, loading, ticketId}) => {
    return (
      <div data-id="app">
        <Header />
        <Board titles={titles}/>
        {displayCreateTicketWindow ? <CreateTicketWindow allStatuses={titles} /> : null}
        {displayDescriptionWindow ? <DescriptionWindow allStatuses={titles} ticketId={ticketId}/> : null}
        {loading ? <Loader /> : null}
      </div>
    );
};

const mapStateToProps = (state) => ({
  displayCreateTicketWindow: displayCreateTicketWindowSelector(state),
  displayDescriptionWindow: displayDescriptionWindowSelector(state),
  ticketId: ticketIdSelector(state),
  loading: loadingSelector(state),
});

export default connect(mapStateToProps) (App);

