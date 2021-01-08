import React, { Component } from 'react'
import AppHeader from '../../components/app-header'
import SearchInput from '../../components/search-input/search-input'
import ToDoList from '../../components/todo-list/todo-list'
import ItemStatusFilter from '../../components/item-status-filter/item-status-filter'
import ItemAddForm from '../item-add-form'

import './app.css';

export default class App extends Component {

  itemId = 1

  state = {
    todos: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch')
    ]
  }

  createTodoItem(label) {
    return { label: label, done: false, important: false, id: this.itemId++ }
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

  addItem = (text) => {
    this.setState(({ todos }) => {
      return {
        todos: [...todos, this.createTodoItem(text)]
      }
    })
  }

  // Update object in the state
  onToggleImportant = (id) => {
    console.log(`Toggle Important on ${id}`)
    this.setState(({todos}) => {
      const index = todos.findIndex((item) => item.id === id)
      const oldItem = todos[index]
      const newItem = {...oldItem, important: !oldItem.important}
      return {
        todos: [...todos.slice(0, index), newItem, ...todos.slice(index + 1)]
      }
    })
  }

  onToggleDone = (id) => {
    console.log(`Toggle Done on ${id}`)
    this.setState(({todos}) => {
      const index = todos.findIndex((item) => item.id === id)
      const oldItem = todos[index]
      const newItem = {...oldItem, done: !oldItem.done}
      return {
        todos: [...todos.slice(0, index), newItem, ...todos.slice(index + 1)]
      }
    })
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader todos={this.state.todos} />
        <div className="top-panel d-flex">
          <SearchInput />
          <ItemStatusFilter />
        </div>
        <ToDoList
          todos={this.state.todos}
          onDeleted={(id) => this.deleteItem(id)}
          onToggleImportant={(id) => this.onToggleImportant(id)}
          onToggleDone={(id) => this.onToggleDone(id)}
        />
        <ItemAddForm onItemAdded={(text) => this.addItem(text)} />
      </div>
    );
  }
}