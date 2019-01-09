import {connect} from 'react-redux';

import {Saved} from './Saved';

const mapStateToProps = state => {
  return {
    savedGems: state.gems || [],
  };
};

export default connect(
    mapStateToProps,
)(Saved);