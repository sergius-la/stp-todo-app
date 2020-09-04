import React from 'react'

const SearchInput = () => {
    const searchText = 'Search'
    const searchStyle = {
      fontSize: '20px'
    }
  
    return (
      <input 
      style={searchStyle}
      placeholder={searchText}/>
    );
}

export default SearchInput;