import {connect} from 'react-redux';

import {toggleGem} from '../../../actions/';
import {GemsList} from './GemsList';

const mapStateToProps = state => {
  return {
    savedGems: state.gems || [],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleGem: gem => {
      dispatch(toggleGem(gem));
    },
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(GemsList);