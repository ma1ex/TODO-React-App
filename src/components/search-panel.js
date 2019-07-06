import React from 'react';

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

export default SearchPanel;