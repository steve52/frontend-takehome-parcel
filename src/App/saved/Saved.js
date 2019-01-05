import React, {Component} from 'react';
import GemsList from '../gemsList/GemsList';

export default class Saved extends Component {
  constructor(props) {
    super(props);

    this.state = {
      savedGemsArray: [],
    };

    window.addEventListener('storage', function(e) {
      debugger;
    })
  }

  componentWillMount() {
    const savedGems = JSON.parse(localStorage.getItem('savedGems'));
    const savedGemsArray = Object.keys(savedGems).map((key) => {
      return savedGems[key];
    });
    console.log('savedGemsArray', savedGemsArray);
    this.setState({savedGemsArray});
  }

  render() {
    console.log('this.state.savedGems', this.state.savedGemsArray);
    return (
      <div>
        {
          this.state.savedGemsArray.length === 0 &&
          'No Saved Gems'
        }
        {
          this.state.savedGemsArray.length > 0 &&
          <GemsList gems={this.state.savedGemsArray} />
        }
      </div>
    );
  }
}
