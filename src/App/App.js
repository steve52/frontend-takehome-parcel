import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

import Search from './pages/Search/SearchContainer';
import Saved from './pages/Saved/SavedContainer';

import './App.scss';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container col-8 p-3">
          <nav>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/"
                  exact
                >
                  Search for new Gems
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/saved"
                  exact
                >
                  View Saved Gems
                </NavLink>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Search}></Route>
          <Route path="/saved" component={Saved}></Route>
        </div>
      </Router>
    );
  }
}