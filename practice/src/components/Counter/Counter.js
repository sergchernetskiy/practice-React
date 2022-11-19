import React from "react";

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleDecrement = () => {
    this.setState((prevState) => ({ value: prevState.value - 1 }));
  };

  handleIncrement = () => {
    this.setState((prevState) => ({ value: prevState.value + 1 }));
  };

  render() {
    return (
      <div className="Counter">
        <h1>Counter</h1>
        <button
          className="Counter__btn"
          type="button"
          onClick={this.handleDecrement}
        >
          -
        </button>
        <span className="Counter__value">{this.state.value}</span>
        <button
          className="Counter__btn"
          type="button"
          onClick={this.handleIncrement}
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
