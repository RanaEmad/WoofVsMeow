import React from "react";
import "./App.css";
import Dog from "./components/Dog/Dog";
import Cat from "./components/Cat/Cat";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      round: 1,
      catScore: 0,
      dogScore: 0,
    };
  }

  handleWin = (type = "dog") => {
    if (type === "cat") {
      this.setState((state) => ({
        catScore: state.catScore + 1,
        round: state.round + 1,
      }));
    } else {
      this.setState((state) => ({
        dogScore: state.dogScore + 1,
        round: this.state.round + 1,
      }));
    }
    this.setState({
      round: this.state.round + 1,
    });
  };

  render() {
    return (
      <div className="app">
        <Dog win={this.handleWin} />
        <Cat win={this.handleWin} />
      </div>
    );
  }
}

export default App;
