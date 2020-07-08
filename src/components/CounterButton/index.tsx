import React, { Component } from "react";

interface ICounterButtonState {
  count: number;
}

interface ICounterButtonProps {
  color?: string;
}

class CounterButton extends Component<ICounterButtonProps, ICounterButtonState> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <button
        id="counter"
        color={this.props.color}
        onClick={() => this.setState((state) => ({ count: state.count + 1 }))}
      >
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton;
