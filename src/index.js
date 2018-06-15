import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

// Old key
// const API_KEY = 'AIzaSyAhjW8XgUxytacj3ReGvU862GZq1P8Qhss';

// New Key
const API_KEY = 'AIzaSyCSp9YJiat-PsAYFD0X70XCXuC476madv4';

YTSearch({ key: API_KEY, term: 'surfboards' }, function(data) {
  console.log(data);
});

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
