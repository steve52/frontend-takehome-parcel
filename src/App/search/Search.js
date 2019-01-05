import React, {Component} from 'react';
import GemsList from '../gemsList/GemsList';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      fetching: false,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const searchTerm = document.getElementById('searchTerm').value;

    this.setState({fetching: true});

    fetch(`http://localhost:3000/api/v1/search.json?query=${searchTerm}`)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          console.log('json', json);
          this.setState({
            results: json,
            fetching: false,
          });
        });
  }

  render() {
    return (
      <div >
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            id="searchTerm"
          />
          <button type="submit">
            Search for Gems
          </button>
        </form>

        {
          this.state.fetching && <div>
            Fetching results...!
          </div>
        }

        { this.state.results.length > 0 &&
          <ul>
            <GemsList gems={this.state.results} />
          </ul>
        }
      </div>
    );
  }
}
