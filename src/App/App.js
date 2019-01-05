import React from 'react';
import Search from './search/Search';
import Saved from './saved/Saved';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Search for new Gems</Link>
            </li>
            <li>
              <Link to="/saved">View Saved Gems</Link>
            </li>
          </ul>

          <Route path="/" exact component={Search}></Route>
          <Route path="/saved" component={Saved}></Route>
        </div>
      </Router>
    );
  }
}