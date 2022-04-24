import React, { Component } from "react";

class ClassComponentLife extends Component {
  state = {
    name: "",
    count: 0,
  };

  componentDidMount() {
    document.title = `clicked ${this.state.count} + times`;
  }

  componentDidUpdate(prevProps, prevState) {
    document.title = `clicked ${this.state.count} + times`;
    console.log("updating class component");
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +1
        </button>
      </div>
    );
  }
}

export default ClassComponentLife;
