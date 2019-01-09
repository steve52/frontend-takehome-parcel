import {TOGGLE_GEM} from '../actions/actionTypes';

// If the gem passed through is already saved, then remove it.
// Otherwise, add it to the saved gems
export default function gems(state = [], action) {
  switch (action.type) {
    case TOGGLE_GEM:
      let newState;
      const gem = action.gem;
      const indexOfGem = state.findIndex(g => g.name === gem.name);
      if (indexOfGem !== -1) {
        newState = state.filter(g => g.name !== gem.name);
      } else {
        newState = [
          ...state,
          {
            ...gem,
          },
        ];
      }
      return newState;
    default:
      return state;
  }
}