import React from "react";

// function based component

// function Greeter(props) {
//   return (
//     <div className="greeter">
//       <span className="first-word">Hello </span> {props.name || "world"}
//     </div>
//   );
// }

// class based component

class Greeter extends React.Component {
  // pass in the props
  constructor(props) {
    // pass in the props to react via super()
    super(props);
    // state
    this.state = {
      count: 0,
    };
  }

  // function to handle onClick
  handleClick = () => {
    if (this.state.count >= 10) {
      this.setState({
        count: 0
      })
    } else {
      this.setState({
        count: this.state.count + 1
      })
    }
  }

  render() {
    return (
      <div className="greeter">
        <span className="first-word">Hello </span> {this.props.name || "world"}
        {/* control + command + space brings up emoji picker */}
        <button onClick={this.handleClick}>👋</button>
        <span>{this.state.count}</span>
      </div>
    );
  }
}

export default Greeter;
