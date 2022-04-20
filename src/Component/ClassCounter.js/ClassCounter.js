import React, { Component } from "react";

class ClassCounter extends Component {
  state = {
    count: 0,
  };

  addOneHandler = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  addTwoHandler = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 2 };
    });
  };

  addFiveHandler = () => {
    for (let i = 0; i < 5; i++)
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
  };

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.addOneHandler}>+1</button>
        <button onClick={this.addTwoHandler}>+2</button>
        <button onClick={this.addFiveHandler}>+5</button>
      </div>
    );
  }
}

export default ClassCounter;
