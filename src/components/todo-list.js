import React from 'react';

import TodoListItem from './todo-list-item';

// React Component
const TodoList = () => {
    // Variables
    const items = ['Item #1', 'Item #2', 'Item #3', 'Item #4'];
    // React Element
    const reactElement = <li>Add Item #3</li>;

    return (
        <ul>
            { reactElement }
            <li><TodoListItem label={ items[0] } /></li>
            <li><TodoListItem label={ items[1] } important /></li>
            <li><TodoListItem label={ items[2] } /></li>
            <li><TodoListItem label={ items[3] } /></li>
        </ul>
    );
};

export default TodoList;