import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({onToggle, onRemove, text, completed}) => (
    <li 
        className="todo-item" 
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        <input type="checkbox" className="toggle" checked={completed?'checked':''} readOnly onClick={onToggle}/>
        <label className="text">{text}</label>
        <button className="remove" onClick={onRemove}>×</button>
    </li>
)

export default TodoItem;