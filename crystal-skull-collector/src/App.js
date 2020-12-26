import React, { Component } from "react";

import SkullsList from "./SkullsList";
import TargetNumber from "./TargetNumber";
import CurrentTotal from "./CurrentTotal";
import WinsAndLosses from "./WinsAndLosses";

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

  skullsResetState = [...this.state.skulls];

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
  componentDidUpdate(prevState) {
    // if current total is lower than the target, continue with the game
    if (this.state.target === 0) {
      return;
    } else if (prevState.currentTotal !== this.state.currentTotal) {
      const curr = this.state.currentTotal;
      const target = this.state.target;
      let newWins = this.state.wins;
      let newLosses = this.state.losses;

      // if the current total is equal
      if (curr === target) {
        // increase wins
        newWins++;
        // reset the game
        this.setState({
          skulls: this.skullsResetState,
          target: 0,
          currentTotal: 0,
          wins: newWins,
        });
        console.log(this.state.wins);
      }
      // if the current total is greater
      else if (curr > target) {
        // increase losses
        newLosses++;
        // reset the game
        this.setState({
          skulls: this.skullsResetState,
          target: 0,
          currentTotal: 0,
          losses: newLosses,
        });
        console.log(this.state.losses);
      }
    }
  }

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
        <WinsAndLosses wins={this.state.wins} losses={this.state.losses} />
        <button onClick={() => this.setNumbers()}>Play</button>
      </div>
    );
  }
}

export default App;
