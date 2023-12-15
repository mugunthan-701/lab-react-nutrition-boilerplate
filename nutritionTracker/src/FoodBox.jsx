import React, { Component } from 'react';
import List from './List';

export default class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      totalAmount: 0,
    };
  }

  handleCount = (value) => {
    this.setState({ count: value });
  };

  handleTotal = () => {
    this.setState({ totalAmount: this.state.count * this.props.food.cal });
  };

  handleReset = () => {
    this.setState({ count: 0, totalAmount: 0 });
  };

  render() {
    return (
      <>
        <div id='foodbox'>
          <img src={this.props.food.img} alt='' />
          <div id='data'>
            <h1>{this.props.food.name}</h1>
            <h2>{this.props.food.cal}</h2>
          </div>
          <div>
            <input
              type='number'
              min='1'
              placeholder='Enter the Quantity'
              onChange={(e) => this.handleCount(e.target.value)}
            />
            <button onClick={this.handleTotal}>Add</button>
          </div>
        </div>
        <div>
          <List
            count={this.state.count}
            name={this.props.food.name}
            totalAmount={this.state.totalAmount}
            handleReset={this.handleReset}
          />
        </div>
      </>
    );
  }
}
