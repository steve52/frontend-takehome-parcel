import React, {Component} from 'react';
import PropTypes from 'prop-types';

import GemsList from '../../components/GemsList/GemsListContainer';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      fetching: false,
      fetched: false,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const searchTerm = document.getElementById('searchTerm').value;

    this.setState({
      fetching: true,
      fetched: false,
    });

    fetch(`http://localhost:3000/api/v1/search.json?query=${searchTerm}`)
        .then(res => {
          return res.json();
        })
        .then(json => {
          this.setState({
            results: json,
            fetching: false,
            fetched: true,
          });
        })
        .catch(err => {
          this.setState({
            results: [],
            fetching: false,
            fetched: true,
          });
        });
  }

  render() {
    return (
      <div >
        <form
          onSubmit={this.handleSubmit.bind(this)}
          className="form-inline mt-3">
          <input
            type="text"
            id="searchTerm"
            className="form-control mr-3"
          />
          <button
            type="submit"
            className="btn btn-primary"
          >
            Search for Gems
          </button>
        </form>

        {
          this.state.fetching &&
          <div className="d-flex justify-content-center my-4">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        }

        {
          this.state.fetched && this.state.results.length === 0 &&
          <div>
            No Gems found
          </div>
        }

        { !this.state.fetching && this.state.results.length > 0 &&
          <GemsList
            gems={this.state.results}
            savedGems={this.props.savedGems} />
        }
      </div>
    );
  }
}

Search.propTypes = {
  savedGems: PropTypes.arrayOf(
      PropTypes.object,
  ).isRequired,
};