import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import Context from '../context';
import checkMark from '../img/check-mark.svg';
import dustbin from '../img/dustbin.svg';

const TodoItem = ({ todo }) => {

  const { toggleItem } = useContext(Context);
  const { removeItem } = useContext(Context);

  return (
    <li className={ClassNames("todo-item", {"done": todo.completed})}>
      <span className="todo-item__title-wrapper">
        <label htmlFor={"checkbox" + todo.id} className="todo-item__checkbox-label">
          <input 
            type="checkbox" 
            id={"checkbox" + todo.id}
            className="todo-item__checkbox"
            checked={todo.completed}
            onChange={() => toggleItem(todo.id)}
          />  
          <img src={checkMark} alt="" className="todo-item__check-mark-img"/>
        </label>
        <span className="todo-item__title">{todo.title}</span>
      </span>
      <button 
        type="button" 
        className="todo-item__remove-button"
        onClick={() => removeItem(todo.id)}
      >
        <img src={dustbin} alt="" className="todo-item__dustbin-img" />
      </button>
    </li>
  )
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired,
  toggleItem: PropTypes.func.isRequired
};

export default TodoItem;