import React, { Component } from "react";

// css
import "./normalize.css";
import "./App.css";
import styles from "./scoreboard.module.css";
import buttonstyles from "./button.module.css";

// components
import Header from "./components/header/Header";
import SkullsList from "./components/skullsList/SkullsList";
import TargetNumber from "./components/targetNumber/TargetNumber";
import CurrentTotal from "./components/currentTotal/CurrentTotal";
import WinsAndLosses from "./components/winsAndLosses/WinsAndLosses";
import Rules from "./components/rules/Rules";

class App extends Component {
  // define initial state
  state = {
    skulls: [
      { id: 1, assignedNumber: 0, src: "/assets/white-skull.png" },
      { id: 2, assignedNumber: 0, src: "/assets/green-skull.png" },
      { id: 3, assignedNumber: 0, src: "/assets/red-skull.png" },
      { id: 4, assignedNumber: 0, src: "/assets/black-skull.png" },
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
    this.setState({ skulls: newSkullsArray });
  }

  // runs number assignment functions
  setNumbers() {
    /**
     * todo Hide play button after click
     * todo Display again whe game is complete
     *  */

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
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="wrapper">
          <section>
            <SkullsList
              skulls={this.state.skulls}
              setCurrentTotal={(e, curr) => this.setCurrentTotal(e, curr)}
            />
          </section>
          <section className={buttonstyles.container}>
            <button
              onClick={() => this.setNumbers()}
              className={buttonstyles.button}
            >
              Play
            </button>
          </section>
          <section className={styles.scoreboard}>
            <TargetNumber target={this.state.target} />
            <CurrentTotal total={this.state.currentTotal} />
            <WinsAndLosses wins={this.state.wins} losses={this.state.losses} />
          </section>

          <Rules />
        </div>
      </div>
    );
  }
}

export default App;
