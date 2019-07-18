import React, {Component} from 'react';

import './search-panel.css';

// React Component
export default class SearchPanel extends Component {
    
    state = {
        searchText: ''
    }
    
    onSearch = (e) => {
        const searchText = e.target.value;
        this.setState({ searchText });
        this.props.onSearch( searchText );
    };
    
    render() {
        
        return (
            <input type="text" className="form-control search-input" 
                placeholder="type to search" onChange={ this.onSearch }
                value={ this.state.searchText } />
        );
    }
}
