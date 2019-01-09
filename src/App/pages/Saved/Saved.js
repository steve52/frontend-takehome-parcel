import React from 'react';
import PropTypes from 'prop-types';

import GemsList from '../../components/GemsList/GemsListContainer';

export const Saved = ({savedGems}) => {
  return (
    <div>
      {
        savedGems.length === 0 &&
        'No Saved Gems'
      }
      {
        savedGems.length > 0 &&
        <GemsList gems={savedGems} />
      }
    </div>
  );
};

Saved.propTypes = {
  savedGems: PropTypes.arrayOf(
      PropTypes.object,
  ).isRequired,
};