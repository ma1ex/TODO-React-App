import React from 'react';

// App components
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

// App style
import './app.css';

// Main Component
const App = () => {
    
    // Основные данные приложения
    const todoData = [
        { 
            id: 1,
            label: 'Drink Coffee', 
            important: false
        },
        { 
            id: 2,
            label: 'Make Awesome App', 
            important: true,
        },
        { 
            id: 3,
            label: 'Have a dinner', 
            important: false
        },
        {
            id: 4,
            label: 'Have a lunch', 
            important: false
        }
    ];    
    
    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={4} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList todos={ todoData } onDeleted={ (id) => console.log('Del: ', id) } />
        </div>
    )
};

export default App;