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
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Make Awesome App', important: true, id: 2 },
        { label: 'Have a lunch', important: false, id: 3 },
        { label: 'Have a lunch', important: false, id: 4 }
    ];    
    
    return (
        <div className="todo-app">
            <AppHeader />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList todos={ todoData } />
        </div>
    )
};

export default App;