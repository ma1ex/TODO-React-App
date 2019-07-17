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
    
    // Генератор ID
    maxId = 100;
    
    state = {
        // Основные данные приложения
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a dinner'),
            this.createTodoItem('Have a lunch')
        ]
    };

    // Метод создания нового объекта
    createTodoItem(label) {
        return {
            id:  this.maxId++, // Generated UID
            label,
            important: false,
            done: false,
            searched: false
        };
    }

    // Удаление элемента из массива данных
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

    // Добавление нового элемента в массив данных
    addItem = (text) => {
        
        const newItem = this.createTodoItem(text);
        
        this.setState( ({todoData}) => {
            // Add Element in Array
            const newTodoData = [...todoData, newItem];

            return {
                todoData: newTodoData
            };
        });
    };

    // "Переключатель" параметров у элемента
    toggleProperty(arr, id, propName) {
        // получение индекса у элемента для изменения параметра
        const idx = arr.findIndex((el) => el.id === id);
        // Определенный элемент массива
        const oldItem = arr[idx];
        // Новый массив с элементами, включающий старый массив + новый элемент массива
        //   с измененным параметром (состоянием)
        const newItem = {
            ...oldItem,
            [propName]: !oldItem[propName]
        };

        // Construct new Array
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    // "Переключатель" параметра important
    onToggleImportant = (id) => {
        this.setState( ({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };
    
    // "Переключатель" параметра done
    onToggleDone = (id) => {
        this.setState( ({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    };
    
    //
    onSearch = (text) => {
        this.setState( ({todoData}) => {
            for (let i = 0; i < todoData.length; i++) {
                if (todoData[i].label === text) {
                    return {
                        todoData: this.toggleProperty(todoData, todoData[i].id, 'searched')
                    };
                }
            }
        });
    };
    
    render() {
        // Счетчики выполненных и оставшихся заданий
        const doneCount = this.state.todoData.filter(el => el.done).length;
        const todoCount = this.state.todoData.length - doneCount;
        
        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel onSearch={ this.onSearch } />
                    <ItemStatusFilter />
                </div>
                <TodoList 
                    todos={ this.state.todoData }
                    onDeleted={ this.deleteItem }
                    onToggleImportant={ this.onToggleImportant }
                    onToggleDone={ this.onToggleDone }
                />
                <ItemAddForm onItemAdded={ this.addItem } />
            </div>
        )
    }
};
