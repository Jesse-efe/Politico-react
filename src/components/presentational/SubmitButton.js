import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = ({ className, value }) => (
  <div>
    <input type="submit" className={className} value={value} />
  </div>
);

SubmitButton.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default SubmitButton;
