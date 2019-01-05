import React, {Component} from 'react';

export default class GemsList extends Component {
  constructor(props) {
    super(props);

    const savedGems = JSON.parse(localStorage.getItem('savedGems')) || {};

    this.state = {
      savedGems,
    };
  }

  render() {
    const SingleGem = ({gem}) => {
      const toggleSave = () => {
        const savedGems = this.state.savedGems;

        if (savedGems[gem.name]) {
          delete savedGems[gem.name];
        } else {
          savedGems[gem.name] = gem;
        }

        this.setState({savedGems});
        localStorage.setItem('savedGems', JSON.stringify(savedGems));
      };

      const isSaved = (this.state.savedGems[gem.name] !== undefined);

      return (
        <li>
          {gem.name}
          <button onClick={toggleSave}>{isSaved ? 'Unsave' : 'Save'}</button>
        </li>
      );
    };

    const AllGems = ({gems}) =>{
      return gems.map((gem, index) => {
        return <SingleGem gem={gem} key={index} />;
      });
    };


    return (
      <ul>
        <AllGems gems={this.props.gems} />
      </ul>
    );
  };
}