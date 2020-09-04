import React from 'react'
import ReactDOM from 'react-dom'
import AppHeader from './components/header'
import SearchInput from './components/search-input'
import ToDoList from './components/todo-list'

const App = () => {

  return (
    <div>
      <AppHeader />
      <SearchInput />
      <ToDoList />
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'))