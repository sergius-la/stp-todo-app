import React, { Component} from 'react'
import AppHeader from '../../components/app-header'
import SearchInput from '../../components/search-input/search-input'
import ToDoList from '../../components/todo-list/todo-list'
import ItemStatusFilter from '../../components/item-status-filter/item-status-filter'
import ItemAddForm from './item-add-form'

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

  addItem = (text) => {
    const ids = this.state.todos.map(function(item) {
      return item.id
    })

    this.setState(({todos}) => {
      return {
        todos: [...todos, {label: text, important: false, id: Math.max(...ids) + 1}]
      }
    })
  }

  onToggleImportant = (id) => {
    console.log(`Toggle Important on ${id}`)
    
  }

  onToggleDone = (id) => {
    console.log(`Toggle Done on ${id}`)
  };

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
          onToggleImportant={(id) => this.onToggleImportant(id)}
          onToggleDone={(id) => this.onToggleDone(id)}
        />
        <ItemAddForm onItemAdded={(text) => this.addItem(text)}/>
      </div>
    );
  }
}