import React from 'react'
import ReactDOM from 'react-dom'
import AppHeader from './components/header'
import SearchInput from './components/search-input'
import ToDoList from './components/todo-list'

import './index.css';

const App = () => {

  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 },
  ]

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />

      <div className="top-panel d-flex">
        <SearchInput />
      </div>
      <ToDoList todos={todoData} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))