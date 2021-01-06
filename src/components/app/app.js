import React, { Component } from 'react'
import AppHeader from '../../components/app-header'
import SearchInput from '../../components/search-input/search-input'
import ToDoList from '../../components/todo-list/todo-list'
import ItemStatusFilter from '../../components/item-status-filter/item-status-filter'

import './app.css';

export default class App extends Component {

  state = {
    todos: [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make Awesome App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 },
    ]
  }

  deleteItem = (id) => {
    console.log(`Delete ${id}`)
    this.setState(({ todos }) => {
      const index = todos.findIndex((item) => item.id === id)
      return {
        // React state should be treated as immutable.
        todos: [...todos.slice(0, index), ...todos.slice(index + 1)]
      }
    })
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchInput />
          <ItemStatusFilter />
        </div>
        <ToDoList
          todos={this.state.todos}
          onDeleted={(id) => this.deleteItem(id)}
        />
      </div>
    );
  }
}