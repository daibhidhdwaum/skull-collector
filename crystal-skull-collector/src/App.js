import React, { Component } from "react";

import TargetNumber from "./TargetNumber";

class App extends Component {
  // define initial state
  state = {
    skulls: [
      { id: 1, assignedNumber: 0, src: "/assets/white-skull.jpg" },
      { id: 2, assignedNumber: 0, src: "/assets/green-skull.jpg" },
      { id: 3, assignedNumber: 0, src: "/assets/red-skull.jpg" },
      { id: 4, assignedNumber: 0, src: "/assets/black-skull.jpg" },
    ],
    target: 0,
    currentTotal: 0,
    wins: 0,
    losses: 0,
  };

  // set the target number
  setTarget() {
    const currentTarget = Math.floor(Math.random() * 101) + 19;
    this.setState({ target: currentTarget });
  }
  // assign random number to each skull

  // when player clicks on skull
  // update the players current total for this game

  // check if the players current total is equal or greater than the target number
  // if the current total is lower than the target, continue with the game

  // if the current total is equal
  // increase wins
  // reset the game
  // if the current total is greater
  // increase losses
  // reset the game

  render() {
    return (
      <div className="App">
        <h1>Crystal Skull Collector</h1>
        <TargetNumber target={this.state.target} />
        <button onClick={() => this.setTarget()}>Play</button>
      </div>
    );
  }
}

export default App;
