import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
      <Route exact="/" component={MovieList} />
      <Route path="/Movies:id" component={Movie} />
      </div>
    </div>
  );
};

export default App;
