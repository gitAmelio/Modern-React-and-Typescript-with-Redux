import React from 'react';
import './SearchBar.css';

interface SearchBarProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> 
  searchCallback: ()=>void;
}

const SearchBar: React.FC<SearchBarProps> = ({value, onChange, searchCallback}) => {

  const onSubmit = (e:any) => {
    e.preventDefault();
    searchCallback();
  }

  return (
    <form onSubmit={onSubmit} className='search-bar'>
      <label>Enter Search Term</label>
      <input value={value} onChange={onChange} />
      {/* <button>Search</button> */}
    </form>
  )
}

export default SearchBar;
