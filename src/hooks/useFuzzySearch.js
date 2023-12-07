import { useState, useMemo } from 'react';
import Fuse from 'fuse.js';

const useFuzzySearch = (data, options) => {
  const [searchText, setSearchText] = useState('');
  const fuse = useMemo(() => new Fuse(data, options), [data, options]);

  const search = (query) => {
    setSearchText(query);
  };

  const results = fuse.search(searchText);

  return {
    searchText,
    search,
    results
  };
};

export default useFuzzySearch;
