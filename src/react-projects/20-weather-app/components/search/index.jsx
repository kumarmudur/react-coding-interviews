import PropTypes from 'prop-types';

import './style.css';

const Search = ({ search, setSearch, submitSearch}) => {

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    return (
        <div className="search-engine">
            <input 
                type="search"
                placeholder="Enter City Name" 
                name="search"
                value={search}
                onChange={handleChange}
            />
            <button className='search-btn' onClick={submitSearch}>
                Search
            </button>
        </div>
    );
};

Search.propTypes = {
    search: PropTypes.string,
    setSearch: PropTypes.func,
    submitSearch: PropTypes.func,
}

Search.defaultProps = {
    search: '',
    setSearch: () => {},
    submitSearch: () => {},
}

export default Search;