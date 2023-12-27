import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchUsers } from '../../actions/githubAction';
import './search-bar.css'

const SearchBar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    const input = e.target.value;
    setQuery(input);
    dispatch(searchUsers(input));
  };

  return (
    <div className='search-bar-container'>
      <input
        className='search-bar-input'
        type="text"
        placeholder="Find Github Users..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
