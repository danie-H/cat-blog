import React from 'react';
import FavoritesPage from './features/cats/containers/favoritesPage';
import HomePage from './features/cats/containers/homePage';
import DetailsPage from './features/cats/containers/detailPage';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import NavBar from './features/cats/components/navbar';


function App() {
  return (
    <Router>
        <Switch>
          <Container fluid style={{backgroundColor: '#eef3ff'}}>
            <NavBar />
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/detail" component={DetailsPage}/>
            <Route exact path="/favorite" component={FavoritesPage}/>
          </Container>
        </Switch>
    </Router>
  );
}

export default App;
