import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import todosFromServer from './DataFromServer.js';
import Context from './context';
import AddTodo from './components/AddTodo';

const App = () => {

  const [todos, setTodos] = React.useState(todosFromServer);

  const toggleItem = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    )
  };

  const removeItem = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const addTodo = title => {
    setTodos(
      todos.concat([{
        id: Date.now(),
        title,
        completed: false
      }])
    )
  }

  return (
    <Context.Provider value={{ toggleItem, removeItem }}>
      <div className="App">
        <h1>Todo list</h1>
        <AddTodo addTodo={addTodo}/>
        <TodoList todos={todos}/>
      </div>
    </Context.Provider>
  )
};

export default App;
