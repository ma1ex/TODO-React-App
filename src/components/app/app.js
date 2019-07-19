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
        ],
        // Текст для поиска
        searchText: '',
        // Фильтр
        filter: 'all' // all, active, done
    };

    // Метод создания нового объекта
    createTodoItem(label) {
        return {
            id:  this.maxId++, // Generated UID
            label,
            important: false,
            done: false
        };
    }

    // Удаление элемента из массива данных
    deleteItem = (id) => {
        this.setState( ({todoData}) => {
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
    
    // 3-й вариант поиска
    onSearch = (searchText) => {
        this.setState({ searchText });
    };

    /**
     * Поиск по тексту
     *
     * @return  {array}  Отфильтрованный массив
     */
    search (items, searchText) {
        if (searchText.length === 0) {
            return items;
        }
        
        return items.filter((item) => item.label
                        .toLowerCase()
                        .indexOf(searchText) !== -1);
    }

    // Изменение состояния фильтра
    onFilter = (filter) => {
        this.setState({ filter });
    };
    
    // Filter
    filter (items, filter) {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }
    
    render() {
        const { todoData, searchText, filter} = this.state;
        // Счетчики выполненных и оставшихся заданий
        const doneCount = todoData.filter(el => el.done).length;
        const todoCount = todoData.length - doneCount;
        // Массив найденных поиском элементов
        const visibleItems = this.filter(this.search(todoData, searchText), filter);

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel onSearch={ this.onSearch } />
                    <ItemStatusFilter filter={ filter } onFilter={ this.onFilter } />
                </div>
                <TodoList 
                    todos={ visibleItems }
                    onDeleted={ this.deleteItem }
                    onToggleImportant={ this.onToggleImportant }
                    onToggleDone={ this.onToggleDone }
                />
                <ItemAddForm onItemAdded={ this.addItem } />
            </div>
        )
    }
};