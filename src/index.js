import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';

import './index.css';

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

// Render React App
ReactDOM.render(<App />, document.getElementById('root'));