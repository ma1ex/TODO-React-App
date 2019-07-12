import React from 'react';

import TodoListItem from '../todo-list-item';

import './todo-list.css';

// React Component
const TodoList = ( {todos, onDeleted, onToggleImportant, onToggleDone} ) => {
    //
    const elements = todos.map( (item) => {
        // Деструктуризация массива поэлементно на id и всё остальное
        const { id, ...itemProps } = item;
        
        return (
            <li key={ id } className="list-group-item">
                <TodoListItem {...itemProps} onDeleted={ () => onDeleted(id) }
                    onToggleImportant={ () => onToggleImportant(id) }
                    onToggleDone={ () => onToggleDone(id) } />
            </li>
        );
    });
    
    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default TodoList;