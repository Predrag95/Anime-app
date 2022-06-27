import React from 'react';

const Search = () => {
  return (
    <div className='search-wrapper'>
      <div className='search-name'>
        <h2>Search For Anime</h2>
      </div>
      <form className='form-wrapper'>
        <input 
          className='search-input' 
          type="text" 
        />
      </form>
    </div>
  )
};

export default Search;