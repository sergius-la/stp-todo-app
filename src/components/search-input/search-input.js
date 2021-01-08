import React, { Component } from 'react'
import './search-input.css';

export default class SearchInput extends Component {
  searchText = 'Search';

  state = {
    term: ''
  }

  onSearchChange = (event) => {
    const term = event.target.value
    this.setState({term})
    this.props.onSearchChange(term)
  }

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder={this.searchText}
        value={this.state.term} 
        onChange={this.onSearchChange}/>
    );
  }
}