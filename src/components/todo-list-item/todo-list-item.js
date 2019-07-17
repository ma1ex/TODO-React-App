import React, {Component} from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

    /**
     * Основной метод рендеринга
     *
     * @return  {void} 
     */
    render() {
        // Деструктуризация параметров компонента
        const { label, onDeleted, done, important, onToggleDone, onToggleImportant, searched } = this.props;
        
        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }

        if(important) {
            classNames += ' important';
        }

        if(searched) {
            classNames += ' searched';
        }

        return (
            <span className={classNames}>
                <span className="todo-list-item-label" onClick={ onToggleDone }>
                    { label }
                </span>
    
                <button type="button" className="btn btn-outline-success btn-sm float-right" onClick={ onToggleImportant }>
                    <i className="fa fa-exclamation" />
                </button>
                <button type="button" className="btn btn-outline-danger btn-sm float-right" onClick={ onDeleted }>
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        );
    }
}