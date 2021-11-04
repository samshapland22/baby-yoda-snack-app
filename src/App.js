import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      snackIndex: 0,
      possibleSnacks: [
        "ice spider",
        "small toad",
        "frog eggs",
        "blue cookie",
        "cup of broth",
      ],
    };
  }

  giveSnack = () => {
    const { snackIndex, possibleSnacks } = this.state;
    if (
      possibleSnacks[snackIndex] === "blue cookie" ||
      possibleSnacks[snackIndex] === "cup of broth"
    ) {
      this.setState({
        count: this.state.count + 1,
      });
    } else {
      alert("We shouldn't let Grogu eat that... let's find a different snack.");
    }
  };

  changeSnack = () => {
    const { snackIndex } = this.state;
    const nextIndex = (snackIndex + 1) % 5;

    this.setState({
      snackIndex: nextIndex,
    });
  };

  handleReset = () => {
    this.setState({
      count: 0,
      snackIndex: 0,
    });
  };

  render() {
    const { count, snackIndex, possibleSnacks } = this.state;

    if (count < 30) {
      return (
        <div className="App">
          <h1>Give Baby Yoda some snacks.</h1>
          <img
            src="https://img.huffingtonpost.com/asset/5fb802c62900005b61c6c565.png?ops=1778_1000"
            alt="baby yoda"
          />
          <div className="card">
            <div>
              Baby Yoda has eaten <span className="count">{count}</span> snacks.
            </div>
            <button onClick={this.changeSnack}>Change snack</button>
            <button onClick={this.giveSnack}>Give snack</button>
            <div className="snack">
              Current snack selected:{" "}
              <strong>{possibleSnacks[snackIndex]}</strong>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <h1>Baby Yoda is full. Good job!</h1>
          <img
            src="https://i.pinimg.com/originals/d8/45/6f/d8456f6d7d512caa69f678e4fb180baf.jpg"
            alt="baby yoda"
          />
          <div className="card">
            <div>Come back another time.</div>
            <button onClick={this.handleReset}>Start over</button>
          </div>
        </div>
      );
    }
  }
}

export default App;
