import React, { Component } from 'react';

export default class List extends Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.count} {this.props.name} gives you {this.props.totalAmount} Calories
        </h1>
        <button onClick={this.props.handleReset}>Reset</button>
      </div>
    );
  }
}
