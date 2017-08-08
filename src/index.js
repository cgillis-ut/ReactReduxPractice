import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyD9qjDwRDSkofBPKUwqE_chcU3_vV_dw7k';
//Create a new component . This should produce some HTML
const App = () => {
  return (
    <div>
    <SearchBar />
    </div>
  );
}

//Take this component's generated HTML and put in on the page
//(in the DOM)
ReactDOM.render(<App />,
  document.querySelector('.container'));
