import React from 'react'
import AppHeader from '../../components/app-header'
import SearchInput from '../../components/search-input/search-input'
import ToDoList from '../../components/todo-list/todo-list'

import './app.css';

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

export default App;