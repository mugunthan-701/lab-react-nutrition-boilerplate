import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <div id='search'>
      <input id='barsearch' type='text'placeholder='Enter Here'onChange={(e) => this.props.handleSearch(e) } />
    </div>
    )
  }
}
