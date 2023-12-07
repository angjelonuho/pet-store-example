import './FilterSearch.css';
import useFuzzySearch from '../hooks/useFuzzySearch';

const FilterSearch = ({ data, placeholder }) => {
  const { searchText, search, results } = useFuzzySearch(data, {
    keys: ['name', 'species'],
  });


  return (
    <div className='search-container'>
      <img src='icons/search.svg' alt='search' className='search-icon' />
      <input
        type="search"
        className='search-input'
        placeholder={placeholder}
        value={searchText}
        onChange={(e) => search(e.target.value)}
      />
      {results.length > 0 && (
        <div className='search-list-container'>
          <ul className='search-list-ul'>
            <hr className='searh-list-hr' />
            {results.map((item, index) => (
              <li className='search-list-li' key={index} tabIndex="0">
                {item.item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterSearch;
