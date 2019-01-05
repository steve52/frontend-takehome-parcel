// import React, {Component} from 'react';

// export default class Gem extends Component {
//   constructor(props) {
//     super(props);

//     const savedGems = JSON.parse(localStorage.getItem('savedGems')) || {};

//     this.state = {
//       savedGems,
//     };
//   }

//   toggleSave = () => {
//     const savedGems = this.state.savedGems;

//     if (savedGems[gem.name]) {
//       delete savedGems[gem.name];
//     } else {
//       savedGems[gem.name] = gem;
//     }

//     this.setState({savedGems});
//     localStorage.setItem('savedGems', JSON.stringify(savedGems));
//   };

//   render() {
//     return (
//       <li>
//         {gem.name}
//         <button onClick={toggleSave}>{isSaved ? 'Unsave' : 'Save'}</button>
//       </li>
//     );
//   };
// }