import reducer from './index';
import {TOGGLE_GEM} from '../actions/actionTypes';

const FAKE_GEM_1= {
  name: 'test-gem-1',
  info: 'blah',
  anotherField: 'another fake field',
};
const FAKE_GEM_2 = {
  name: 'test-gem-2',
  info: 'blah blah',
  anotherField: 'another fake field',
};

describe('gems reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      gems: [],
    });
  });

  it('should handle TOGGLE_GEM - Save', () => {
    expect(
        reducer({
          gems: [FAKE_GEM_1]},
        {
          type: TOGGLE_GEM,
          gem: FAKE_GEM_2,
        })
    ).toEqual({
      gems: [
        FAKE_GEM_1,
        FAKE_GEM_2,
      ],
    });
  });

  it('should handle TOGGLE_GEM - Unsave', () => {
    expect(
        reducer({
          gems: [FAKE_GEM_1, FAKE_GEM_2],
        },
        {
          type: TOGGLE_GEM,
          gem: FAKE_GEM_1,
        })
    ).toEqual({
      gems: [
        FAKE_GEM_2,
      ],
    });
  });
});