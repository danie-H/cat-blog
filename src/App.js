import React from 'react';
import FavoritesPage from './features/cats/containers/favoritesPage';
import HomePage from './features/cats/containers/homePage';
import DetailsPage from './features/cats/containers/detailPage';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/detail" component={DetailsPage}/>
          <Route exact path="/favorite" component={FavoritesPage}/>
        </Switch>
    </Router>
  );
}

export default App;
