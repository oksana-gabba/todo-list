import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const  TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <TodoItem todo={todo} key={todo.id}/>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
};

TodoList.defaultProps = {
  todos: []
};

export default TodoList;