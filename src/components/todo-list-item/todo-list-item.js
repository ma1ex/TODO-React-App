import React, {Component} from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

    // Состояния - изменяемые параметры компонента
    state = {
        done: false,
        important: false
    };
    
    // Отметка о выполнении
    onLableClick = () => {
        this.setState( ({ done }) => {
            return {
                done: !done
            };
        });
    };

    // Отметка о важности
    onMarkImportant = () => {
        this.setState( ({ important }) => {
            return {
                important: !important
            };
        });
    };
    
    /**
     * Основной метод рендеринга
     *
     * @return  {void} 
     */
    render() {
        // Деструктуризация параметров компонента
        const { label, onDeleted } = this.props;
        // Деструктуризация параметров состояния компонента
        const { done, important } = this.state;
        
        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }

        if(important) {
            classNames += ' important';
        }

        return (
            <span className={classNames}>
                <span className="todo-list-item-label" onClick={ this.onLableClick }>
                    { label }
                </span>
    
                <button type="button" className="btn btn-outline-success btn-sm float-right" onClick={ this.onMarkImportant }>
                    <i className="fa fa-exclamation" />
                </button>
                <button type="button" className="btn btn-outline-danger btn-sm float-right" onClick={ onDeleted }>
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        );
    }
}