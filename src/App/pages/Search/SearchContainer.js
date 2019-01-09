import {connect} from 'react-redux';

import Search from './Search';


const mapStateToProps = state => {
  return {
    savedGems: state.gems || [],
  };
};

export default connect(
    mapStateToProps,
)(Search);