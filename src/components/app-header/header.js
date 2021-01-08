import React, {Component} from 'react'
import './header.css';

export default class AppHeader extends Component {
  
  /*
    Can be simplifyed: doneItems = this.props.todos.filter((el) => el.done)
  */
  getNumOfItemsBy = (status) => {
    let count = 0
    this.props.todos.forEach(function (item) {
      if (item.done === status) {
        count++
      } 
    })
    return count
  }

  render() {
    return (
      <div className="app-header d-flex">
      <h1>Todo List</h1>
      <h2>{this.getNumOfItemsBy(false)} more to do, {this.getNumOfItemsBy(true)} done</h2>
    </div>
    );
  }
}