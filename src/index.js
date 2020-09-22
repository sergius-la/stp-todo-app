import React from 'react'
import ReactDOM from 'react-dom'
import AppHeader from './components/header'
import SearchInput from './components/search-input'
import ToDoList from './components/todo-list'

const App = () => {

  const todoData = [
    {label: 'Drink Coffee', important: false},
    {label: 'Make Awesome App', important: true},
    {label: 'Have a lunch', important: false},
  ]

  return (
    <div>
      <AppHeader />
      <SearchInput />
      <ToDoList todos={todoData}/>
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'))