import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkButtons = ({ value, location, className }) => (
  <Link to={`/${location}`}>
    <button type="button" className={className}>{value}</button>
  </Link>
);

LinkButtons.propTypes = {
  value: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default LinkButtons;
