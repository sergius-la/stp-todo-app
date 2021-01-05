import React from 'react'
import './search-input.css';

const SearchInput = () => {
    const searchText = 'Search';
  
    return (
      <input 
      className="form-control search-input"
      placeholder={searchText}/>
    );
}

export default SearchInput;