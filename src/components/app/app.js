import React, { PureComponent } from 'react';
import Board from '../board';
import Header from '../header';
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Board boardInfo={this.props.boardInfo}/> 
      </div>
    );
  }
}

