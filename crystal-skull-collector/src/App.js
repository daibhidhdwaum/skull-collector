import React, { Component } from "react";

import SkullsList from "./SkullsList";
import TargetNumber from "./TargetNumber";
import CurrentTotal from "./CurrentTotal";

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
  setAssignedNumbers() {
    const newSkullsArray = this.state.skulls.map((skull) => {
      const currentTarget = Math.floor(Math.random() * 11) + 1;

      const copyOfSkulls = { ...skull, assignedNumber: currentTarget };

      return copyOfSkulls;
    });
    console.log(newSkullsArray);
    this.setState({ skulls: newSkullsArray });
  }

  // runs number assignment functions
  setNumbers() {
    this.setTarget();
    this.setAssignedNumbers();
  }

  // when player clicks on skull
  // update the players current total for this game
  setCurrentTotal(e, curr) {
    const newTotal = this.state.currentTotal + curr;

    this.setState({ currentTotal: newTotal });
  }

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
        <div>
          <SkullsList
            skulls={this.state.skulls}
            setCurrentTotal={(e, curr) => this.setCurrentTotal(e, curr)}
          />
        </div>
        <TargetNumber target={this.state.target} />
        <CurrentTotal total={this.state.currentTotal} />
        <button onClick={() => this.setNumbers()}>Play</button>
      </div>
    );
  }
}

export default App;
