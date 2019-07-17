import React, {Component} from 'react';

import './search-panel.css';

// React Component
export default class SearchPanel extends Component {
    
    onSearch = (e) => {
        if (e.keyCode === 13) {
            this.props.onSearch(e.target.value);
            // Очистка поля после сабмита
            e.target.value = '';
        }
    };
    
    render() {
        
        return (
            <input type="text" className="form-control search-input" 
                placeholder="type to search" onKeyDown={ this.onSearch } />
        );
    }
}
