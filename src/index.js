import React from 'react';
import ReactDOM from 'react-dom';

// React Component
const AppHeader = () => {
    return <h1>My Todo List</h1>;
};

// React Component
const SearchPanel = () => {
    // Attributes
    const style = {
        fontSize: '25px',
        color: 'blue',
        padding: '5px'
    };
    const placeholder = 'Search';


    return <input className="input-search" style={style} placeholder={placeholder} />;
};

// React Component
const TodoList = () => {
    // Variables
    const items = ['Item #1', 'Item #2'];
    // React Element
    const reactElement = <li>Add Item #3</li>;

    return (
        <ul>
            <li>{ items[0] }</li>
            <li>{ items[1] }</li>
            { reactElement }
        </ul>
    );
};

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