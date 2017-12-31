import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {FilterTypes} from '../../constants.js';
import {toggleTodo, removeTodo} from '../actions.js';
import {bindActionCreators} from 'redux';
import TodoItem from './todoItem';

const TodoList = ({todos, onToggleTodo, onRemoveTodo}) => {
    return (
        <ul className="todo-list">
        {
            todos.map((todoItem) => (
                <TodoItem
                key={todoItem.id}
                text={todoItem.text}
                completed={todoItem.completed}
                onToggle={ () => onToggleTodo(todoItem.id) }
                onRemove={ () => onRemoveTodo(todoItem.id) }
                />
                ))
        }
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
};

const selectVisibleTodos = (todos, filter) => {
    switch(filter) {
        case FilterTypes.ALL:
            return todos;
        case FilterTypes.COMPLETED:
            return todos.filter(item => item.completed);
        case FilterTypes.UNCOMPLETED:
            return todos.filter(item => !item.completed);
        default:
            throw new Error('unsupported filter');
    };
};

const mapStateToProps = (state) => {
    return {
        todos: selectVisibleTodos(state.todos, state.filter)
    };
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onToggleTodo: (id) => {
//             dispatch(toggleTodo(id))
//         },
//         onRemoveTodo: (id) => {
//             dispatch(removeTodo(id))
//         }
//     };
// }

const mapDispatchToProps = (dispatch) => bindActionCreators({
    onToggleTodo: toggleTodo,
    onRemoveTodo: removeTodo
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
