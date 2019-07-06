import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

// Main Component
const App = () => {
    // React Element with Object
    const date = <span>Сегодня: { new Date().toString() }</span>;
    
    return (
    <div>
        <AppHeader />
        <SearchPanel />
        <TodoList />
        { date }
    </div>
)};

// Render React App
ReactDOM.render(<App />, document.getElementById('root'));