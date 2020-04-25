import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './containers/HomePage/HomePage'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
