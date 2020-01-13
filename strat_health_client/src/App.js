import React from 'react';
import './App.css';
import Login from './Login';
import NewContact from './NewContact';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/new_contact">
          <NewContact />
        </Route>
        <Route path="/home">
            <Home />
        </Route>
        <Route path="/">
            <Login />
        </Route>
      </Switch>
    </Router>
  );
}

