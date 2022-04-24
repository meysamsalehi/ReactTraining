import React, { Component } from "react";

class ClassTimer extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    this.myTimer = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
      console.log("hi meysam");
    }, 1000);
  }

  componentWillUnmount() {
    console.log("cwum unmount");
    clearInterval(this.myTimer);
  }
  render() {
    return <div>classInterval</div>;
  }
}

export default ClassTimer;
