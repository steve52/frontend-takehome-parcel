import React from 'react';
import PropTypes from 'prop-types';

export const GemsList = ({gems, savedGems, toggleGem}) => {
  const Gem = ({gem}) => {
    const isActive = savedGems.find(g => {
      return g.name === gem.name;
    });

    const buttonLabel = isActive ? 'Unsave' : 'Save';

    return (
      <li className="card my-3">
        <div className="card-header
          d-flex align-items-center
          justify-content-between"
        >
          <h5 className="m-0">{gem.name} <small>v{gem.version}</small></h5>
          <button
            className={
              'btn btn-primary' + ((isActive) ? ' active' : '')
            }
            aria-pressed={isActive ? 'true' : 'false'}
            data-toggle="button"
            onClick={() => toggleGem(gem)}
          >
            {buttonLabel}
          </button>
        </div>
        <div className="card-body p-3">
          <p>{gem.info}</p>
          <a href={gem.homepage_uri}>Visit project</a>
        </div>
      </li>
    );
  };

  return (
    <ul className="list-unstyled">
      {gems.map((gem, index) => {
        return <Gem gem={gem} key={index} />;
      })}
    </ul>
  );
};

GemsList.propTypes = {
  savedGems: PropTypes.arrayOf(
      PropTypes.object,
  ).isRequired,
  gems: PropTypes.arrayOf(
      PropTypes.object,
  ).isRequired,
  toggleGem: PropTypes.func.isRequired,
};