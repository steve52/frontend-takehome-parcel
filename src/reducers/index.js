import {combineReducers} from 'redux';
import gems from './gems';

// Use combineReducers so that gems is nested in
// the state under a key of 'gems', ready for
// more reducers to be added in the future.
export default combineReducers({gems});