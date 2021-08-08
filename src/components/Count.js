// import react
import React from 'react'

// class must extend React.Component
export default class Count extends React.Component {
  // create a constructor and pass in props
  constructor(props) {
    // pass props to super (React)
    super(props)
    // use react state
    this.state = {
      count: 0
    }
  }

  onClickAdd = () => {
    // check current state
    this.setState({
      count: this.state.count + 1
    })
  }

  onClickSubtract = () => {
    // check current state
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div className="count">
        <span className="count">
        {this.props.count}
        {/* control + command + space brings up emoji picker */}
        <button onClick={this.onClickSubtract}>-</button>
        {" " + this.state.count + " "}
        <button onClick={this.onClickAdd}>+</button>
        </span>
      </div>
    );
  }
}