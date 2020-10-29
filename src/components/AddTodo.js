import React, { useState } from 'react';
import plus from '../img/plus.svg';
import PropTypes from 'prop-types';

const AddTodo = ({ addTodo }) => {

  const [value, setValue] = useState('');

  const submitHandler = event => {
    event.preventDefault();

    if (value) {
      addTodo(value);
      setValue('');
    }
  }

  return (
    <form 
      className="todo-list__form"
      onSubmit={submitHandler}
    >
      <input 
        type="text" 
        className="todo-list__add-input" 
        value={value}
        onChange={event => setValue(event.target.value)}
        placeholder="Add new todo"
      />
      <button type="submit" className="todo-list__add-button">
        <img src={plus} className="todo-list__add-button-img" alt="" />
      </button>
    </form>
  )
};

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;