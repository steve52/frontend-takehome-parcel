import {createStore} from 'redux';
import rootReducer from './reducers';

// Load state from localstorage
const loadState = () => {
  const stateString = localStorage.getItem('state');
  if (stateString === null) return undefined;

  return JSON.parse(stateString);
};

// Take the current state, serialize it and save in localstorage
const saveState = (state) => {
  localStorage.setItem('state', JSON.stringify(state));
};

const preloadedState = loadState();

const store = createStore(rootReducer, preloadedState);

// Everytime the state changes, write to localstorage
store.subscribe(() => {
  const state = store.getState();
  saveState({
    gems: state.gems,
  });
});

// Create a store with our one reducer and preloaded state from localstorage
export default store;