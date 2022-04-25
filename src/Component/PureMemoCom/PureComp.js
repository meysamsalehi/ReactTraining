import { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("Pure");
    return <div>pure component {this.props.name}</div>;
  }
}

export default PureComp;
