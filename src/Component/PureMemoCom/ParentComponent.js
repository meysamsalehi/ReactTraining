import React, { Component } from "react";
import MemoComp from "./MemoComp";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

class ParentComponent extends Component {
  state = {
    name: "saheb",
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "saheb" });
    }, 1000);
  }
  render() {
    console.log("Parent");
    return (
      <div>
        {/* <PureComp name={this.state.name} /> */}
        <MemoComp name={this.state.name} />
        <RegComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComponent;
