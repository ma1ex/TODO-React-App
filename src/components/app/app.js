import React, { Component } from 'react';

// App components
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

// App style
import './app.css';

// Main Component
export default class App extends Component {
    
    state = {
        // Основные данные приложения
        todoData: [
            { 
                id: 0,
                label: 'Drink Coffee', 
                important: false
            },
            { 
                id: 1,
                label: 'Make Awesome App', 
                important: true,
            },
            { 
                id: 2,
                label: 'Have a dinner', 
                important: false
            },
            {
                id: 3,
                label: 'Have a lunch', 
                important: false
            }
        ]
    };

    //
    deleteItem = (id) => {
        this.setState( ({todoData}) => {
            /* const idx = todoData.findIndex((el) => el.id === id);
            const newTodoData = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ]; */

            // const newTodoData = todoData.filter((value, key) => {return key !== idx});
            const newTodoData = todoData.filter((value) => value.id !== id);
            
            return {
                todoData: newTodoData
            };
        });
    };
    
    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={4} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList todos={ this.state.todoData } onDeleted={ this.deleteItem } />
                <ItemAddForm />
            </div>
        )
    }
};
